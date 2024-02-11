import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  contraseña: string;

}