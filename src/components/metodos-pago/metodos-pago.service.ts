import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodosPago } from 'src/common/entities/metodosPago.entity';
import { MetodosPagoResponseDto } from './dto/response/metodoPagoResponse.dto';
import { CreateMetodosPagoDto } from './dto/input/createMetodoPago.dto';
import { UpdateMetodosPagoDto } from './dto/input/updateMetodoPago.dto';

@Injectable()
export class MetodosPagoService {
    constructor(
        @InjectRepository(MetodosPago)
        private metodosPagoRepository: Repository<MetodosPago>
    ){}
    
    async findAll() : Promise<MetodosPagoResponseDto[]>{
        const metodosPago = await this.metodosPagoRepository.find();
        return metodosPago.map(metodo => new MetodosPagoResponseDto(metodo));
    }

    async findById(idMetodoPago : number) : Promise<MetodosPagoResponseDto>{
        const metodoPago = await this.metodosPagoRepository.findOne({where: {idMetodos_de_pago : idMetodoPago}});
        return metodoPago;
    }

    async create(metodoPagoToCreate : CreateMetodosPagoDto) : Promise<MetodosPago>{
        const metodoPago = new MetodosPago();

        metodoPago.nombre =  metodoPagoToCreate.nombre;

        const metodoPagoCreated =  await this.metodosPagoRepository.save(metodoPago);

        return metodoPagoCreated;
    }

    async update(metodoPagoToUpdate : UpdateMetodosPagoDto) : Promise<MetodosPago>{
        const updateMetodo = await this.metodosPagoRepository.update(metodoPagoToUpdate.idMetodos_de_pago, {
            nombre : metodoPagoToUpdate.nombre,
        })
        const metodoPagoUpdated =  await this.metodosPagoRepository.findOne({where:{idMetodos_de_pago : metodoPagoToUpdate.idMetodos_de_pago}})
        return metodoPagoUpdated;
    }

    async delete(idMetodoPagoToDelete : number) : Promise <string>{   
        const metodoDelete = await this.metodosPagoRepository.delete(idMetodoPagoToDelete);
        return 'Se ha eliminado el metodo de pago de la base de datos';
    }

}
