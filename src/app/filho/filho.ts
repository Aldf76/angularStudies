import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Produto {
  name: string;
  preco: number;
}

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.html',
  styleUrl: './filho.css',
})

//exemplo 1 de output
export class Filho {
  @Input() nome: string = '';



  @Output() clicado = new EventEmitter<string>();
  enviarMensagem() {
    this.clicado.emit('Olá do Filho');
  }

  //exemplo2 de output

  @Output() produtoAdicionado = new EventEmitter<{
    name: string;
    preco: number;
  }>();

  name: string = 'Barbeador';
  preco: number = 59;

  adicionarProduto() {
    this.produtoAdicionado.emit({
      name: this.name,
      preco: this.preco,
    });
  }


//exemplo 3 de output

@Output() formEnviado = new EventEmitter<any>();

enviarFormulario(form: NgForm) {
if (form.valid) {
  this.formEnviado.emit(form.value);
}
}

}


