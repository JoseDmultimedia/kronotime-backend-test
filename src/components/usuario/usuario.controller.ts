import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UsuarioResponseDto } from './dto/reponse/usuarioResponse.dto';
import { CreateUsuarioDto } from './dto/input/createUsuario.dto';
import { Usuario } from 'src/common/entities/usuario.entity';
import { AuthGuard } from '../auth/auth.guard';
import { Public } from 'src/common/utils/publicDecorator';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly usuarioService : UsuarioService,
    ){}

    @Get()
    findAll(): Promise<UsuarioResponseDto[]>{
        return this.usuarioService.findAll();
    }

    // @UseGuards(AuthGuard)
    @Public()
    @Get(':idUsuario')
    findById(@Param('idUsuario') idUsuario : number): Promise<UsuarioResponseDto>{
        return this.usuarioService.findById(idUsuario);
    }

    @Post()
    create(@Body() usuarioToCreate : CreateUsuarioDto) : Promise<Usuario>{
        return this.usuarioService.create(usuarioToCreate);
    }   


}
