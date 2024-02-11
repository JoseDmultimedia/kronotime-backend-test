import { Module } from '@nestjs/common';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenModule {}
