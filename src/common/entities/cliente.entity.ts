import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Cliente'})
export class Cliente{
    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    nombre : string;

    @Column()
    documento : string;

    @Column()
    email : string;

    @Column()
    address : string;

    @Column()
    telefono : string;

    @Column()
    departamento : string;

    @Column()
    ciudad : string;
}