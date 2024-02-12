import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/common/entities/usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioResponseDto } from './dto/reponse/usuarioResponse.dto';
import { CreateUsuarioDto } from './dto/input/createUsuario.dto';
import { hashPassword, comparePasswords } from 'src/common/utils/encrypt-password';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async findAll(): Promise<UsuarioResponseDto[]> {
        const users = await this.usuarioRepository.find();
        return users.map((user) => new UsuarioResponseDto(user));
    }

    async findById(idUsuario: number): Promise<UsuarioResponseDto> {
        const user = await this.usuarioRepository.findOne({ where: { idUsuario: idUsuario } })
        const userToSend = new UsuarioResponseDto(user);
        return userToSend;
    }

    async findByEmail(correoToSearch : string) : Promise<Usuario>{
        const user = await this.usuarioRepository.findOne({where : {correo : correoToSearch}});
        return user;
    }

    async create(usuarioToCreate: CreateUsuarioDto): Promise<Usuario> {
        const user = new Usuario();

        const userExist = await this.usuarioRepository.findOne({ where: { correo: usuarioToCreate.correo } });
        if (userExist) {
            throw new HttpException("El email ya se encuentra registrado", HttpStatus.BAD_REQUEST)
        };

        user.nombre = usuarioToCreate.nombre;
        user.correo = usuarioToCreate.correo;
        user.contraseña = await hashPassword(usuarioToCreate.contraseña);

        const userCreated = await this.usuarioRepository.save(user);
        return userCreated;
    }

}
