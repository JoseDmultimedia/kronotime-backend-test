import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteResponseDto } from './dto/response/clienteResponse.dto';
import { Public } from 'src/common/utils/publicDecorator';
import { Cliente } from 'src/common/entities/cliente.entity';
import { CreateClienteDto } from './dto/input/createCliente.dto';
import { UpdateClienteDto } from './dto/input/updateCliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(
        private readonly clienteService: ClienteService,
    ) { }

    @Public()
    @Get()
    findAll(): Promise<ClienteResponseDto[]> {
        return this.clienteService.findAll();
    }

    @Public()
    @Get(':idCliente')
    findById(@Param('idCLiente') idCliente: number): Promise<ClienteResponseDto> {
        return this.clienteService.findById(idCliente);
    }

    // @Public()
    @Post()
    create(@Body() clienteToCreate: CreateClienteDto): Promise<Cliente> {
        return this.clienteService.create(clienteToCreate);
    }

    @Put()
    upddate(@Body() clienteToUpdate: UpdateClienteDto): Promise<Cliente> {
        return this.clienteService.update(clienteToUpdate);
    }

    @Delete(':idCliente')
    delete(@Param('idCliente') idCliente: number): Promise<string> {
        return this.clienteService.delete(idCliente);
    }

}
