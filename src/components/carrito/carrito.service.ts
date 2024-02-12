import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from 'src/common/entities/carrito.entity';
import { CarritoResponseDto } from './dto/response/carritoResponse.dto';
import { CreateCarritoDto } from './dto/input/createCarrito.dto';
import { UpdateCarritoDto } from './dto/input/updateCarrito.dto';

@Injectable()
export class CarritoService {
    constructor(
        @InjectRepository(Carrito)
        private carritoRepository: Repository<Carrito>
    ){}

    async findAll() :  Promise<CarritoResponseDto[]>{   
        const carritos =  await this.carritoRepository.find();
        return carritos.map(carrito => new CarritoResponseDto(carrito));
    }

    async findById(idCarritoToFind : number) : Promise<CarritoResponseDto>{
        const carrito = await this.carritoRepository.findOne({where : {idCarrito : idCarritoToFind}});
        return carrito;
    }

    async create(carritoToCreate : CreateCarritoDto) : Promise<Carrito>{
        const carrito = new Carrito();
        
        carrito.descuento = carritoToCreate.descuento;
        carrito.total = carritoToCreate.total;
        carrito.subtotal = carritoToCreate.subtotal;

        const carritoCreated =  await this.carritoRepository.save(carrito);

        return carritoCreated;
    }

    async update(carritoToUpdate : UpdateCarritoDto) : Promise<CarritoResponseDto>{
        const update = await this.carritoRepository.update(carritoToUpdate.idCarrito, {
            total: carritoToUpdate.total,
            subtotal : carritoToUpdate.subtotal,
            descuento : carritoToUpdate.descuento
        });
        const carritoUpdated =  await this.carritoRepository.findOne({ where :{idCarrito : carritoToUpdate.idCarrito}});
        return carritoUpdated;
    }

    async delete(carritoToDelete : number) : Promise<string>{
        const deleteCarrito = await this.carritoRepository.delete(carritoToDelete);
        return 'Se ha eliminado el carrito de la base de datos';
    }


}
