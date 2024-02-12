import { Module } from '@nestjs/common';
import { MetodosEnvioController } from './metodos-envio.controller';
import { MetodosEnvioService } from './metodos-envio.service';
import { MetodosEnvio } from 'src/common/entities/metodosEnvio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetodosEnvio])],
  controllers: [MetodosEnvioController],
  providers: [MetodosEnvioService]
})
export class MetodosEnvioModule {}
