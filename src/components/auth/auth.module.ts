import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/common/constant/constantJwt';

@Module({
  imports: [UsuarioModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET.secret,
      signOptions: { expiresIn: '10m' },
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
