import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { Public } from 'src/common/utils/publicDecorator';
import { CarritoResponseDto } from './dto/response/carritoResponse.dto';
import { CreateCarritoDto } from './dto/input/createCarrito.dto';
import { Carrito } from 'src/common/entities/carrito.entity';
import { UpdateCarritoDto } from './dto/input/updateCarrito.dto';

@Controller('carrito')
export class CarritoController {
    constructor(
        private readonly carritoService : CarritoService,
    ){}

    @Public()
    @Get()
    findAll(): Promise<CarritoResponseDto[]>{
        return this.carritoService.findAll();
    }

    @Public()
    @Get(':idCarrito')
    findById(@Param('idCarrito') idCarrito : number): Promise <CarritoResponseDto>{
        return this.carritoService.findById(idCarrito);
    }

    @Public()
    @Post()
    create(@Body() carritoToCreate : CreateCarritoDto) : Promise<Carrito>{
        return this.carritoService.create(carritoToCreate);
    }

    @Public()
    @Put()
    update(@Body() carritoToUpdate : UpdateCarritoDto) : Promise<Carrito>{
        return this.carritoService.update(carritoToUpdate);
    }

    @Public()
    @Delete(':idCarrito')
    delete(@Param('idCarrito') idCarrito : number) : Promise<string>{
        return this.carritoService.delete(idCarrito);
    }


}
