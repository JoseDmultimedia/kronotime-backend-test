import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  contraseña: string;
}