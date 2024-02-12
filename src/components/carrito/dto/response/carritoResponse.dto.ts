import { Carrito } from "src/common/entities/carrito.entity";

export class CarritoResponseDto {
    idCarrito: number;
    descuento: number;
    total: number;
    subtotal: number;
 

    constructor(carrito: Carrito) {
        this.idCarrito = carrito.idCarrito;
        this.descuento = carrito.descuento;
        this.total = carrito.total;
        this.subtotal = carrito.subtotal;
   
    }
}