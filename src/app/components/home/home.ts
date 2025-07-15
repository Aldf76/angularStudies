import { Component } from '@angular/core';
import { MessageService } from '../../message-service/message-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  title = 10.0
  currentYear = new Date()

  // variáveis e lóica para o ngIf
  isLogged = false;
  cadastrar(){
    this.isLogged = !this.isLogged;
    console.log('cadastrado com sucesso')

  }

// array para ngFor
frutas = ["bananas", "morango", "fluminense", "manga"];

// array para o exemplo de ngFor + ngIf
products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 }
];

//calculadora
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  atualizarValor1(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valor1 = Number(input.value);
  }

  atualizarValor2(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valor2 = Number(input.value);
  }


  somar(){
    this.resultado = this.valor1 + this.valor2;
  }

  subtrair(){
    this.resultado = this.valor1 - this.valor2;
  }

  
  multiplicar(){
    this.resultado = this.valor1 - this.valor2;
  }

  dividir(){
    this.resultado = this.valor1 * this.valor2;
  }

  get resposta(): number{
    return this.resultado;
  }

  //exemplo de ng class

  isActive = false;

  //exemplo ngIF com else

  temPermissao = false;

  // testando pipe
  teste = "angular";

  // testando o serviço de messages 1- uma dúvida que me ficou né porque no material esse import do serviço é feitp no app,module.
  constructor(public messageService: MessageService) {}
  sendMessage() {
    this.messageService.add('Nova mensagem em ' + new Date().toLocaleDateString("BR"));
}

}
