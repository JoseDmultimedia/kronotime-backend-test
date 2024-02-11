import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

    @Column()
    Producto_idProducto : number;

    @Column()
    Carrito_idCarrito : number;

}