import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Carrito'})
export class Orden{
    @PrimaryGeneratedColumn()
    idCarrito: number;

    @Column()
    descuento : number;

    @Column()
    total : number;

    @Column()
    subtotal : number;

}