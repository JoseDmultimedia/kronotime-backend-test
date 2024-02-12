import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateMetodosEnvioDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    valor: number;

}