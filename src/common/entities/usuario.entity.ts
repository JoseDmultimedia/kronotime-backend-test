import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'Usuario'})
export class Usuario{
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column()
    nombre : string;

    @Column()
    correo : string;

    @Column()
    contraseña : string;

}