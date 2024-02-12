import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class UpdateProductoDto {

  @IsNumber()
  idProducto: number;

  @IsString()
  nombre: string;

  @IsString()
  sku: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  compare_precio: number;

  @IsNumber()
  cant: number;

  @IsString()
  imagen: string;

}