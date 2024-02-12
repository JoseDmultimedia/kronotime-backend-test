import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateItemsDto {

    @IsNotEmpty()
    @IsNumber()
    precio_venta: number;

    @IsNotEmpty()
    @IsNumber()
    precio_original: number;

    @IsNotEmpty()
    @IsNumber()
    cant: number;

    @IsNotEmpty()
    @IsNumber()
    descuento: number;

    @IsNotEmpty()
    @IsNumber()
    Producto_idProducto: number;

    @IsNotEmpty()
    @IsNumber()
    Carrito_idCarrito: number;

   
}