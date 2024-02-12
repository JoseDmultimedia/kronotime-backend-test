import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Carrito } from 'src/common/entities/carrito.entity';
import { Producto } from 'src/common/entities/producto.entity';


export class UpdateItemsDto {
    
    @IsNumber()
    idItems: number;

    @IsNumber()
    precio_venta: number;

    @IsNumber()
    precio_original: number;

    @IsNumber()
    cant: number;

    @IsNumber()
    descuento: number;

    @IsObject()
    Producto_idProducto: Producto;

    @IsObject()
    Carrito_idCarrito: Carrito;

   
}