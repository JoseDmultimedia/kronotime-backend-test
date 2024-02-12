import { Items } from "src/common/entities/items.entity";
import { Producto } from "src/common/entities/producto.entity";
import { Carrito } from "src/common/entities/carrito.entity";

export class ItemsResponseDto {
    idItems: number;
    precio_venta: number;
    precio_original: number;
    cant: number;
    descuento: number;
    Producto_idProducto: Producto;
    Carrito_idCarrito: Carrito;
  

    constructor(items: Items) {
        this.idItems = items.idItems;
        this.precio_venta = items.precio_venta;
        this.precio_original = items.precio_original;
        this.cant = items.cant;
        this.descuento = items.descuento;
        this.Producto_idProducto = items.Producto_idProducto;
        this.Carrito_idCarrito = items.Carrito_idCarrito;
    }
}