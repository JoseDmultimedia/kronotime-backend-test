import { Injectable } from '@nestjs/common';
import { MetodosEnvio } from 'src/common/entities/metodosEnvio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodosEnvioResponseDto } from './dto/response/metodosEnvioResponse.dto';
import { CreateMetodosEnvioDto } from './dto/input/createMetodosEnvio.dto';
import { UpdateMetodosEnvioDto } from './dto/input/updateMetodoEnvio.dto';

@Injectable()
export class MetodosEnvioService {
    constructor(
        @InjectRepository(MetodosEnvio)
        private metodosEnvioRepository: Repository<MetodosEnvio>
    ){}

    async findAll() : Promise<MetodosEnvioResponseDto[]>{
        const metodosEnvio = await this.metodosEnvioRepository.find();
        return metodosEnvio.map(metodo => new MetodosEnvioResponseDto(metodo));
    }

    async findById(idMetodoEnvio : number) : Promise<MetodosEnvioResponseDto>{
        const metodoEnvio = await this.metodosEnvioRepository.findOne({where: {idMetodos_de_envio : idMetodoEnvio}});
        return metodoEnvio;
    }

    async create(metodoEnvioToCreate : CreateMetodosEnvioDto) : Promise<MetodosEnvio>{
        const metodoEnvio = new MetodosEnvio();

        metodoEnvio.nombre =  metodoEnvioToCreate.nombre;
        metodoEnvio.valor = metodoEnvioToCreate.valor;

        const metodoEnvioCreated =  await this.metodosEnvioRepository.save(metodoEnvio);

        return metodoEnvioCreated;
    }

    async update(metodoEnvioToUpdate : UpdateMetodosEnvioDto) : Promise<MetodosEnvio>{
        const updateMetodo = await this.metodosEnvioRepository.update(metodoEnvioToUpdate.idMetodos_de_envio, {
            nombre : metodoEnvioToUpdate.nombre,
            valor : metodoEnvioToUpdate.valor
        })
        const metodoEnvioUpdated =  await this.metodosEnvioRepository.findOne({where:{idMetodos_de_envio : metodoEnvioToUpdate.idMetodos_de_envio}})
        return metodoEnvioUpdated;
    }

    async delete(idMetodoEnvioToDelete : number) : Promise <string>{   
        const metodoDelete = await this.metodosEnvioRepository.delete(idMetodoEnvioToDelete);
        return 'Se ha eliminado el metodo de envio de la base de datos';
    }


}
