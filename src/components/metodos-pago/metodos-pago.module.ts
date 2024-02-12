import { Module } from '@nestjs/common';
import { MetodosPagoController } from './metodos-pago.controller';
import { MetodosPagoService } from './metodos-pago.service';
import { MetodosPago } from 'src/common/entities/metodosPago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetodosPago])],
  controllers: [MetodosPagoController],
  providers: [MetodosPagoService]
})
export class MetodosPagoModule {}
