import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateProductoDto {
    
    @IsNotEmpty()
    @IsNumber()
    idProducto: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    sku: string;

    @IsNotEmpty()
    @IsNumber()
    precio: number;

    @IsNotEmpty()
    @IsNumber()
    compare_precio: number;

    @IsNumber()
    cant: number;

    @IsNotEmpty()
    @IsString()
    imagen: string;

}