import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MetodosPagoService } from './metodos-pago.service';
import { Public } from 'src/common/utils/publicDecorator';
import { MetodosPagoResponseDto } from './dto/response/metodoPagoResponse.dto';
import { CreateMetodosPagoDto } from './dto/input/createMetodoPago.dto';
import { MetodosPago } from 'src/common/entities/metodosPago.entity';
import { UpdateMetodosPagoDto } from './dto/input/updateMetodoPago.dto';

@Controller('metodos-pago')
export class MetodosPagoController {
    constructor(
        private readonly metodosPagoService : MetodosPagoService,
    ){}

    @Public()
    @Get()
    findAll(): Promise<MetodosPagoResponseDto[]>{
        return this.metodosPagoService.findAll();
    }

    @Public()
    @Get(':idMetodoPago')
    findById(@Param('idMetodoPago') idMetodoPago : number) : Promise<MetodosPagoResponseDto>{   
        return this.metodosPagoService.findById(idMetodoPago);
    }

    @Post()
    create(@Body() metodoPagoToCreate : CreateMetodosPagoDto) : Promise<MetodosPago>{   
        return this.metodosPagoService.create(metodoPagoToCreate);
    }

    @Put()
    update(@Body() metodoPagoToUpdate : UpdateMetodosPagoDto) : Promise<MetodosPago>{
        return this.metodosPagoService.update(metodoPagoToUpdate);
    }

    @Delete(':idMetodoPago')
    delete(@Param('idMetodoPago') idMetodoPago : number) : Promise<string>{
        return this.metodosPagoService.delete(idMetodoPago);
    }
}
