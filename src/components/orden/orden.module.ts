import { Module } from '@nestjs/common';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';
import { Orden } from 'src/common/entities/orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Orden])],
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenModule {}
