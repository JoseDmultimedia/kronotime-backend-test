import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateClienteDto {
    
    @IsNotEmpty()
    @IsNumber()
    idCliente: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    documento: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    telefono: string;

    @IsNotEmpty()
    @IsString()
    departamento: string;

    @IsNotEmpty()
    @IsString()
    ciudad: string;
}