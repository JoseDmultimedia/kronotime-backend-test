import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Metodos_de_pago'})
export class MetodosPago{
    @PrimaryGeneratedColumn()
    idMetodos_de_pago: number;

    @Column()
    nombre : string;

}