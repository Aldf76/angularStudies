import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './lista-usuarios/lista-usuarios';

@Injectable({ // dependência injetável.
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

}
