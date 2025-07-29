import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';


export interface Usuario { // 1 - estou criando uma interface ( molde ) para a interface Usuario
  id: number;
  name: string;
  username: string;
  email: string;
  }

@Component({
  selector: 'app-lista-usuarios',
  standalone: false,
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css'
})



export class ListaUsuarios {

  idRecebido : number | null = null;

constructor(public UsuarioService: UsuarioService) {} // injetando dependência

usuarios: Usuario[] = []; // 2 - usuarios é um array que deve receber objetos do tipo Usuario 

buscarUsuarios(): void {
  this.UsuarioService.getUsers().subscribe((users: Usuario[]) => {
    this.usuarios = users;
    })
// sobre o fluxo de dados e tipagem
// aqui chamamos o serviço e seu método getUsers() que traz a lista de usuários num formato
// <observable> o qual só é ativado e aciona a "escuta " e captura dos dados em users a partir do subscribe
// e depois passamos o valor que veio pelo método para a nossa classe quando o passamos para this.usuarios que tem mesma tipagem
}



}
