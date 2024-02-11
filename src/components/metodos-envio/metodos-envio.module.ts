import { Module } from '@nestjs/common';
import { MetodosEnvioController } from './metodos-envio.controller';
import { MetodosEnvioService } from './metodos-envio.service';

@Module({
  controllers: [MetodosEnvioController],
  providers: [MetodosEnvioService]
})
export class MetodosEnvioModule {}
