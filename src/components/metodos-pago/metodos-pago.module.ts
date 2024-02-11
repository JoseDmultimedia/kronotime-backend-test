import { Module } from '@nestjs/common';
import { MetodosPagoController } from './metodos-pago.controller';
import { MetodosPagoService } from './metodos-pago.service';

@Module({
  controllers: [MetodosPagoController],
  providers: [MetodosPagoService]
})
export class MetodosPagoModule {}
