import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsuarioModule,
    JwtModule.register({
      global: true,
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '10m' },
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
