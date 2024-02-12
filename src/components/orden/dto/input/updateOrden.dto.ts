import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Carrito } from 'src/common/entities/carrito.entity';
import { Cliente } from 'src/common/entities/cliente.entity';
import { MetodosEnvio } from 'src/common/entities/metodosEnvio.entity';
import { MetodosPago } from 'src/common/entities/metodosPago.entity';

export class UpdateOrdenDto {

    @IsNotEmpty()
    @IsNumber()
    OrdenId: number;

    @IsString()
    numero_orden: string;

    @IsObject()
    Cliente_idCliente: Cliente;

    @IsObject()
    Carrito_idCarrito: Carrito;

    @IsObject()
    Metodos_de_pago_idMetodos_de_pago: MetodosPago;

    @IsObject()
    Metodos_de_envio_idMetodos_de_envio: MetodosEnvio;

}