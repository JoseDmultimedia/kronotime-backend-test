import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateOrdenDto {

    @IsNotEmpty()
    @IsString()
    numero_orden: string;

    @IsNotEmpty()
    @IsNumber()
    Cliente_idCliente: number;

    @IsNotEmpty()
    @IsNumber()
    Carrito_idCarrito: number;

    @IsNotEmpty()
    @IsNumber()
    Metodos_de_pago_idMetodos_de_pago: number;

    @IsNotEmpty()
    @IsNumber()
    Metodos_de_envio_idMetodos_de_envio: number;

}