import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.entity';
import { Carrito } from './carrito.entity';

@Entity({name : 'Items'})
export class Items{
    @PrimaryGeneratedColumn()
    idItems: number;

    @Column()
    precio_venta : number;

    @Column()
    precio_original : number;

    @Column()
    cant : number;

    @Column()
    descuento : number;

    // @Column()
    // Producto_idProducto : number;

    // @Column()
    // Carrito_idCarrito : number;

    @ManyToOne(_type => Producto, producto => producto.idProducto)
    @JoinColumn({ name: 'Producto_idProducto' })
    Producto_idProducto : Producto;

    @ManyToOne(_type => Carrito, carrito => carrito.idCarrito)
    @JoinColumn({ name: 'Carrito_idCarrito' })
    Carrito_idCarrito : Carrito;

}