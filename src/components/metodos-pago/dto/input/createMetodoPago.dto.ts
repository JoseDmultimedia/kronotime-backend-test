import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateMetodosPagoDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

}