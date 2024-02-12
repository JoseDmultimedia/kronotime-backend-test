import { MetodosPago } from "src/common/entities/metodosPago.entity";

export class MetodosPagoResponseDto {
    idMetodos_de_pago: number;
    nombre: string;


    constructor(metodosPago : MetodosPago) {
        this.idMetodos_de_pago = metodosPago.idMetodos_de_pago;
        this.nombre = metodosPago.nombre;
    }
}