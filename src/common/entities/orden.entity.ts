import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Carrito } from './carrito.entity';
import { MetodosPago } from './metodosPago.entity';
import { MetodosEnvio } from './metodosEnvio.entity';

@Entity({name : 'Orden'})
export class Orden{
    @PrimaryGeneratedColumn()
    ordenId: number;

    @Column()
    numero_orden : string;

    @Column()
    Cliente_idCliente : number;

    // @Column()
    // Carrito_idCarrito : number;

    // @Column()
    // Metodos_de_envio_idMetodos_de_envio : number;

    // @Column()
    // Metodos_de_pago_idMetodos_de_pago : number;

    @ManyToOne(_type => Carrito, carrito => carrito.idCarrito)
    @JoinColumn({ name: 'Carrito_idCarrito ' })
    Carrito_idCarrito : Carrito;

    @ManyToOne(_type => MetodosPago, metodosPago => metodosPago.idMetodos_de_pago)
    @JoinColumn({ name: 'Metodos_de_pago_idMetodos_de_pago  ' })
    Metodos_de_pago_idMetodos_de_pago  : MetodosPago;

    @ManyToOne(_type => MetodosEnvio, MetodosEnvio => MetodosEnvio.idMetodos_de_envio)
    @JoinColumn({ name: 'Metodos_de_envio_idMetodos_de_envio ' })
    Metodos_de_envio_idMetodos_de_envio : MetodosEnvio;

}