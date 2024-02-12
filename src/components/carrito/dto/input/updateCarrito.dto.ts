import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UpdateCarritoDto {
    
    @IsNumber()
    idCarrito: number;

    @IsNumber()
    descuento: number;

    @IsNumber()
    total: number;

    @IsNumber()
    subtotal: number;

}