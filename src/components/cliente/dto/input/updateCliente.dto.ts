import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UpdateClienteDto {
    
    @IsNumber()
    idCliente: number;

    @IsString()
    nombre: string;

    @IsString()
    documento: string;

    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    telefono: string;

    @IsString()
    departamento: string;

    @IsString()
    ciudad: string;
}