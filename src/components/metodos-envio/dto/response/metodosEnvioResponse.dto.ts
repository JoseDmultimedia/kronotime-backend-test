import { MetodosEnvio } from "src/common/entities/metodosEnvio.entity";


export class MetodosEnvioResponseDto {
    idMetodos_de_envio: number;
    nombre: string;
    valor: number;

    constructor(metodosEnvio : MetodosEnvio) {
        this.idMetodos_de_envio = metodosEnvio.idMetodos_de_envio;
        this.nombre = metodosEnvio.nombre;
        this.valor = metodosEnvio.valor;
    }
}