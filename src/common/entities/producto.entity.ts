import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Producto'})
export class Producto{
    @PrimaryGeneratedColumn()
    idProducto: number;

    @Column()
    nombre : string;

    @Column()
    sku : string;

    @Column()
    precio : number;

    @Column()
    compare_precio : number;

    @Column()
    cant : number;

    @Column()
    imagen : string;

}