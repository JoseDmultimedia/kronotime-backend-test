import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { comparePasswords } from 'src/common/utils/encrypt-password';
import { SignInDto } from './dto/input/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService : UsuarioService,
        private jwtService : JwtService
    ){}

    async SignIn(dataToLogin : SignInDto) : Promise<{ access_token: string }>{
        const user =  await this.usuarioService.findByEmail(dataToLogin.correo);
        if(user === null){
            throw new HttpException('Credenciales incorrectas', HttpStatus.UNAUTHORIZED)
        };

        const verify = await comparePasswords(dataToLogin.contraseña, user.contraseña);
        if(!verify){
            throw new HttpException('Credenciales incorrectas', HttpStatus.UNAUTHORIZED)
        };

        const {contraseña, ...result} = user;
        const payload = { sub: result};

        return {
            access_token: await this.jwtService.signAsync(payload),
        } ;
    }

}
