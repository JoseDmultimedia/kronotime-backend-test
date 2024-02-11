import { Cliente } from "src/common/entities/cliente.entity";

export class ClienteResponseDto {
    idCliente: number;
    nombre: string;
    documento: string;
    email: string;
    address: string;
    telefono: string;
    departamento: string;
    ciudad: string;



    constructor(cliente: Cliente) {
        this.idCliente = cliente.idCliente;
        this.nombre = cliente.nombre;
        this.documento = cliente.documento;
        this.email = cliente.email;
        this.address = cliente.address;
        this.telefono = cliente.telefono;
        this.departamento = cliente.departamento;
        this.ciudad = cliente.ciudad;
    }
}