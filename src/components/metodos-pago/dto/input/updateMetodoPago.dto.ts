import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UpdateMetodosPagoDto {

    @IsNumber()
    idMetodos_de_pago: number;

    @IsString()
    nombre: string;
    
}