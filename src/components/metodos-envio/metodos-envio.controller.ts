import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MetodosEnvioService } from './metodos-envio.service';
import { Public } from 'src/common/utils/publicDecorator';
import { MetodosEnvioResponseDto } from './dto/response/metodosEnvioResponse.dto';
import { CreateMetodosEnvioDto } from './dto/input/createMetodosEnvio.dto';
import { MetodosEnvio } from 'src/common/entities/metodosEnvio.entity';
import { UpdateMetodosEnvioDto } from './dto/input/updateMetodoEnvio.dto';

@Controller('metodos-envio')
export class MetodosEnvioController {
    constructor(
        private readonly metodoEnvioService : MetodosEnvioService,
    ){}

    @Public()
    @Get()
    findAll() : Promise <MetodosEnvioResponseDto[]>{
        return this.metodoEnvioService.findAll();
    }

    @Public()
    @Get(':idMetodoEnvio')
    findById(@Param('idMetodoEnvio') idMetodoEnvio : number) : Promise <MetodosEnvioResponseDto>{
        return this.metodoEnvioService.findById(idMetodoEnvio);
    }

    @Post()
    create(@Body() metodoEnvioToCreate : CreateMetodosEnvioDto) : Promise<MetodosEnvio>{
        return this.metodoEnvioService.create(metodoEnvioToCreate);
    }

    @Put()
    update(@Body() metodoEnvioToUpdate : UpdateMetodosEnvioDto) : Promise <MetodosEnvio>{
        return this.metodoEnvioService.update(metodoEnvioToUpdate);
    }

    @Delete(':idMetodoEnvio')
    delete(@Param('idMetodoEnvio') idMetodoEnvio : number) : Promise <string>{
        return this.metodoEnvioService.delete(idMetodoEnvio);
    }


}
