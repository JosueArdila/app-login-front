import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario:Usuario){
    return this.http.post<Usuario>("http://localhost:9000/apiLogin/registrar", usuario, this.httpOptions);
  }

  login(usuario:any,password:any){
    return this.http.post<Usuario>(`http://localhost:9000/apiLogin/login/${usuario}/${password}`,this.httpOptions);
  }

}
