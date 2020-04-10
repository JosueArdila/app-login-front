import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  control:boolean=false;
  valor:any=false;
  mensaje:boolean=false;
  registro:boolean=false;

  constructor(private router:Router,private servicio:ServicioService) { 

  }

  ngOnInit(): void {
  }

  registrar(){ 
    this.control=false;
    this.mensaje=false;
    this.registro=false;
    
    let nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    let apellido= (<HTMLInputElement>document.getElementById('apellido')).value;
    let usuario= (<HTMLInputElement>document.getElementById('usuario')).value;
    let password= (<HTMLInputElement>document.getElementById('password')).value;

    if(this.validar(nombre,apellido,usuario,password)){
      this.control=true;
      this.router.navigate(['registro']);
    }else{
      let usuarioClase = new Usuario(usuario,password,nombre,apellido);
      try {
        this.servicio.registrarUsuario(usuarioClase).subscribe(data=>{
          this.valor=data;
          console.log(this.valor);
          if(this.valor){
            this.registro=true;
            this.router.navigate(['registro']);
          }else if(!this.valor){
            this.mensaje=true;
            this.router.navigate(['registro']);

          }
        }); 
        
      } catch (error) {
        console.log(error);
      }
      
    } 
  }

private validar(nombre:any,apellido:any,usuario:any,password:any):boolean{
    if(nombre==='' || apellido==='' || usuario==='' || password===''){
        return true;
    }else{
      return false
    }
}

}
