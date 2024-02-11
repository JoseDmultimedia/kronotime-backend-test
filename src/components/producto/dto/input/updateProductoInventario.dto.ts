import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UpdateProductoInventarioDto {
  @IsNotEmpty()
  @IsNumber()
  idProducto: number;

  @IsNumber()
  cant: number;


}