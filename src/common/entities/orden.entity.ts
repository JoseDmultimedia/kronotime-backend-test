import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Orden'})
export class Orden{
    @PrimaryGeneratedColumn()
    ordenId: number;

    @Column()
    numero_orden : string;

    @Column()
    Cliente_idCliente : number;

    @Column()
    Carrito_idCarrito : number;

    @Column()
    Metodos_de_envio_idMetodos_de_envio : number;

    @Column()
    Metodos_de_pago_idMetodos_de_pago : number;

}