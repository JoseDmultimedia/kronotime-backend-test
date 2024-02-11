import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cliente } from 'src/common/entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteResponseDto } from './dto/response/clienteResponse.dto';
import { CreateClienteDto } from './dto/input/createCliente.dto';
import { UpdateClienteDto } from './dto/input/updateCliente.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>
    ){}

    async findAll() : Promise<ClienteResponseDto[]>{
        const clientes = await this.clienteRepository.find();
        return clientes.map(cliente =>  new ClienteResponseDto(cliente));
    }

    async findById(idCliente : number) : Promise<ClienteResponseDto>{
        const cliente = await this.clienteRepository.findOne({where : {idCliente : idCliente}});
        return cliente;
    }

    async create(clienteToCreate : CreateClienteDto) : Promise<Cliente>{

        const clienteToVerify =  await this.clienteRepository.findOne({where : {email : clienteToCreate.email}});
        if(clienteToVerify){
            throw new HttpException('El cliente ya existe', HttpStatus.BAD_REQUEST);
        }

        const cliente = new Cliente();

        cliente.idCliente = clienteToCreate.idCliente;
        cliente.nombre = clienteToCreate.nombre;
        cliente.email = clienteToCreate.email;
        cliente.telefono = clienteToCreate.telefono;
        cliente.ciudad = clienteToCreate.ciudad;
        cliente.departamento = clienteToCreate.departamento;
        cliente.address =  clienteToCreate.address;
        cliente.documento = clienteToCreate.documento;

        const clienteCreated =  await this.clienteRepository.save(cliente);

        return clienteCreated;
    }

    async update(clienteToUpdate : UpdateClienteDto) : Promise<Cliente>{
        const clienteToFind = await this.clienteRepository.findOne({ where: { idCliente: clienteToUpdate.idCliente } });
        if (clienteToFind === null) {
            throw new HttpException(`No se ha encontrado el cliente con el id ${clienteToUpdate.idCliente}`, HttpStatus.NOT_FOUND);
        }

        const update = await this.clienteRepository.update(clienteToUpdate.idCliente, {
            nombre : clienteToUpdate.nombre,
            email : clienteToUpdate.email,
            address : clienteToUpdate.address,
            ciudad : clienteToUpdate.ciudad,
            documento : clienteToUpdate.documento,
            departamento : clienteToUpdate.departamento,
            telefono : clienteToUpdate.telefono
        });

        const updatedCliente =  await this.clienteRepository.findOne({where: {idCliente : clienteToUpdate.idCliente}});

        return updatedCliente;
    }

    async delete(idCliente : number) : Promise<string>{
        const clienteToFind = await this.clienteRepository.findOne({ where: { idCliente: idCliente } });
        if (clienteToFind === null) {
            throw new HttpException(`No se ha encontrado el cliente con el id ${idCliente}`, HttpStatus.NOT_FOUND);
        }
        const deleteCliente =  await this.clienteRepository.delete(idCliente);
        return 'Cliente eliminado de la base de datos';
    }



}
