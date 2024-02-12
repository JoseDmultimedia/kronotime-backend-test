import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoResponseDto } from './dto/response/productoResponse.dto';
import { Public } from 'src/common/utils/publicDecorator';
import { Producto } from 'src/common/entities/producto.entity';
import { CreateProductoDto } from './dto/input/createProducto.dto';
import { UpdateProductoInventarioDto } from './dto/input/updateProductoInventario.dto';
import { UpdateProductoDto } from './dto/input/updateProducto.dto';

@Controller('producto')
export class ProductoController {
    constructor(
        private readonly productoService : ProductoService,
    ){}

    @Public()
    @Get()
    findAll() : Promise<ProductoResponseDto[]>{
        return this.productoService.findAll();
    }

    @Public()
    @Get(':idProducto')
    findById(@Param('idProducto') idProducto : number) : Promise <Producto>{
        return this.productoService.findById(idProducto);
    }

    // @Public()
    @Post()
    create(@Body() productoToCreate : CreateProductoDto) : Promise <Producto>{
        return this.productoService.create(productoToCreate);
    }

    @Put()
    update(@Body() productoToUpdate : UpdateProductoDto) : Promise<Producto>{
        return this.productoService.update(productoToUpdate);
    }

    @Put("/inventario")
    updateInventario(@Body() productoToUpdate : UpdateProductoInventarioDto) : Promise<Producto>{
        return this.productoService.updateCant(productoToUpdate);
    }

    @Delete(':idProducto')
    delete(@Param('idProducto') idProducto : number) : Promise<string>{
        return this.productoService.delete(idProducto);
    }




}
