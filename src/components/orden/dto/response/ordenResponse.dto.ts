import { Orden } from "src/common/entities/orden.entity";
import { Cliente } from "src/common/entities/cliente.entity";
import { Carrito } from "src/common/entities/carrito.entity";
import { MetodosEnvio } from "src/common/entities/metodosEnvio.entity";
import { MetodosPago } from "src/common/entities/metodosPago.entity";

export class OrdenResponseDto {
    OrdenId: number;
    numero_orden: string;
    Cliente_idCliente: Cliente;
    Carrito_idCarrito: Carrito;
    Metodos_de_envio_idMetodos_de_envio: MetodosEnvio;
    Metodos_de_pago_idMetodos_de_pago: MetodosPago;
    
    constructor(orden: Orden) {
        this.OrdenId = orden.OrdenId;
        this.numero_orden = orden.numero_orden;
        this.Cliente_idCliente = orden.Cliente_idCliente;
        this.Carrito_idCarrito = orden.Carrito_idCarrito;
        this.Metodos_de_envio_idMetodos_de_envio = orden.Metodos_de_envio_idMetodos_de_envio;
        this.Metodos_de_pago_idMetodos_de_pago = orden.Metodos_de_pago_idMetodos_de_pago;
    }
}