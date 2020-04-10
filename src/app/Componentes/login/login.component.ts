import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  control:boolean=false;
  mensaje:boolean=false;
  valor:any=false;

  constructor(private router:Router, private servicio: ServicioService) { }

  ngOnInit(): void {
  }

  login(){
    let usuario= (<HTMLInputElement>document.getElementById('usuario')).value;
    let password= (<HTMLInputElement>document.getElementById('password')).value;
    this.control=false;
    this.mensaje=false;

    if(this.validar(usuario,password)){
      this.control=true;
      this.router.navigate(['login']);
    }else{
      
      try{
        this.servicio.login(usuario,password).subscribe(data =>{
          this.valor=data;
          if (this.valor) {
            this.router.navigate(['bienvenida']);
          } else if(!this.valor){
            this.mensaje=true;            
            this.router.navigate(['login']);
          }

        });
      }catch(error){
        console.log(error);
      }


    }
    
  }

  private validar(usuario:any, password:any):boolean{
    if(usuario==='' || password===''){
        return true;
    }else{
      return false
    }
}

}
