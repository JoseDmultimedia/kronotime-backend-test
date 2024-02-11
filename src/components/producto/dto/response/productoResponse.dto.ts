import { Producto } from "src/common/entities/producto.entity";

export class ProductoResponseDto {
    idProducto: number;
    nombre: string;
    sku: string;
    precio : number;
    compare_precio : number;
    cant : number;
    imagen : string;
 

    constructor(producto: Producto) {
        this.idProducto = producto.idProducto;
        this.nombre = producto.nombre;
        this.sku = producto.sku;
        this.precio = producto.precio;
        this.compare_precio = producto.compare_precio;
        this.cant = producto.cant;
        this.imagen = producto.imagen;
        
      }
}