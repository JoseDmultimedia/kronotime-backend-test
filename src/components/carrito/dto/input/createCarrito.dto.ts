import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateCarritoDto {

    @IsNotEmpty()
    @IsNumber()
    descuento: number;

    @IsNotEmpty()
    @IsNumber()
    total: number;

    @IsNotEmpty()
    @IsNumber()
    subtotal: number;

}