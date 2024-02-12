import { Injectable } from '@nestjs/common';
import { Orden } from 'src/common/entities/orden.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenResponseDto } from './dto/response/ordenResponse.dto';
import { CreateOrdenDto } from './dto/input/createOrden.dto';
import { Carrito } from 'src/common/entities/carrito.entity';
import { Cliente } from 'src/common/entities/cliente.entity';
import { MetodosEnvio } from 'src/common/entities/metodosEnvio.entity';
import { MetodosPago } from 'src/common/entities/metodosPago.entity';
import { UpdateOrdenDto } from './dto/input/updateOrden.dto';

@Injectable()
export class OrdenService {
    constructor(
        @InjectRepository(Orden)
        private ordenRepository: Repository<Orden>
    ){}


    async findAll() : Promise<OrdenResponseDto[]>{
        const ordenes = await this.ordenRepository.find({relations : ['Carrito_idCarrito.', 'Cliente_idCliente', 'Metodos_de_pago_idMetodos_de_pago', 'Metodos_de_envio_idMetodos_de_envio']});
        return ordenes.map(orden => new OrdenResponseDto(orden));
    }

    async findById(idOrden : number) : Promise<OrdenResponseDto>{
        const orden = await this.ordenRepository.findOne({where: {OrdenId : idOrden}, relations : ['Carrito_idCarrito', 'Cliente_idCliente', 'Metodos_de_pago_idMetodos_de_pago', 'Metodos_de_envio_idMetodos_de_envio']});
        return orden;
    }

    async create(ordenToCreate : CreateOrdenDto) : Promise<Orden>{
        const orden = new Orden();

        orden.numero_orden = ordenToCreate.numero_orden;

        orden.Carrito_idCarrito = new Carrito();
        orden.Carrito_idCarrito.idCarrito = ordenToCreate.Carrito_idCarrito;

        orden.Cliente_idCliente = new Cliente();
        orden.Cliente_idCliente.idCliente =  ordenToCreate.Cliente_idCliente;

        orden.Metodos_de_envio_idMetodos_de_envio = new MetodosEnvio();
        orden.Metodos_de_envio_idMetodos_de_envio.idMetodos_de_envio = ordenToCreate.Metodos_de_envio_idMetodos_de_envio;

        orden.Metodos_de_pago_idMetodos_de_pago = new MetodosPago();
        orden.Metodos_de_pago_idMetodos_de_pago.idMetodos_de_pago = ordenToCreate.Metodos_de_pago_idMetodos_de_pago;

        const ordenCreated = await this.ordenRepository.save(orden);

        return ordenCreated;
    }

    async update(ordenToUpdate : UpdateOrdenDto) : Promise<Orden>{
        const updateOrden =  await this.ordenRepository.update(ordenToUpdate.OrdenId, {
            numero_orden : ordenToUpdate.numero_orden,
            Carrito_idCarrito : ordenToUpdate.Carrito_idCarrito,
            Cliente_idCliente : ordenToUpdate.Cliente_idCliente,
            Metodos_de_envio_idMetodos_de_envio : ordenToUpdate.Metodos_de_envio_idMetodos_de_envio,
            Metodos_de_pago_idMetodos_de_pago : ordenToUpdate.Metodos_de_pago_idMetodos_de_pago
        });

        const ordenUpdated = await this.ordenRepository.findOne({where: {OrdenId : ordenToUpdate.OrdenId}});

        return ordenUpdated;
    }

    async delete(idOrdenToDelete : number) : Promise<string>{
        const ordenDeleted = await this.ordenRepository.delete(idOrdenToDelete);
        return 'Se ha eliminado la orden de la base de datos';
    }


}
