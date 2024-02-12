import { Usuario } from "src/common/entities/usuario.entity";

export class UsuarioResponseDto {
    idUsuario: number;
    nombre: string;
    correo: string;
    contraseña : string;
 

    constructor(usuario: Usuario) {
        this.idUsuario = usuario.idUsuario;
        this.nombre = usuario.nombre;
        this.correo = usuario.correo;
        this.contraseña = usuario.contraseña;
        
      }
}