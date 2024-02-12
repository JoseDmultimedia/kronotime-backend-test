import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { Public } from 'src/common/utils/publicDecorator';
import { OrdenResponseDto } from './dto/response/ordenResponse.dto';
import { CreateOrdenDto } from './dto/input/createOrden.dto';
import { Orden } from 'src/common/entities/orden.entity';
import { UpdateOrdenDto } from './dto/input/updateOrden.dto';

@Controller('orden')
export class OrdenController {
    constructor(
        private readonly ordenService : OrdenService,
    ){}

    @Public()
    @Get()
    findAll() : Promise<OrdenResponseDto[]>{
        return this.ordenService.findAll();
    }

    @Public()
    @Get(':OrdenId')
    findById(@Param('OrdenId') OrdenId : number): Promise <OrdenResponseDto>{
        return this.ordenService.findById(OrdenId);
    }

    @Public()
    @Post()
    create(@Body() ordenToCreate : CreateOrdenDto) : Promise <Orden>{
        return this.ordenService.create(ordenToCreate);
    }

    @Public()
    @Put()
    update(@Body() ordenToUpdate : UpdateOrdenDto) : Promise<Orden>{
        return this.ordenService.update(ordenToUpdate);
    }

    @Public()
    @Delete(':OrdenId')
    delete(@Param('OrdenId') OrdenId : number) : Promise<string>{
        return this.ordenService.delete(OrdenId);
    }


}
