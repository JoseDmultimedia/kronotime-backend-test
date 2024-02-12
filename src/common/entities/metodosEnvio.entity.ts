import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Metodos_de_envio'})
export class MetodosEnvio{
    @PrimaryGeneratedColumn()
    idMetodos_de_envio: number;

    @Column()
    nombre : string;

    @Column()
    valor : number;

}