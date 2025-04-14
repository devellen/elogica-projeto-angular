import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../componentes/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServiceService {


  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) {

   }
   salvarContato(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>(this.API, usuario)
  }

  obterUsuarios(): Observable<Usuario[]> {
    // return this.Usuarios;

    //httpclient (acesso a todos os metodos http)
    return this.http.get<Usuario[]>(this.API); //eniva a url
  }

}
