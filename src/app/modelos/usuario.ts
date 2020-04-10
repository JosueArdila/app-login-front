export class Usuario {

    usuario:string;
    password:string;
    nombre:string;
    apellido:string;

    constructor(usuario:string,password:string,nombre:string,apellido:string) {
        this.usuario=usuario;
        this.password=password;
        this.nombre=nombre;
        this.apellido=apellido;
    }
}