import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UpdateMetodosEnvioDto {

    @IsNumber()
    idMetodos_de_envio: number;

    @IsString()
    nombre: string;

    @IsNumber()
    valor: number;
    
}