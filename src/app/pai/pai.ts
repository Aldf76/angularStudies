import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,
  templateUrl: './pai.html',
  styleUrl: './pai.css'
})
export class Pai {
nomeUsuario: string = "Felipe"

//exemplo 1 de output
responder(mensagem: string){
  console.log(mensagem)
}

//exemplo 2 de output
adicionar(produto: {name: string ; preco: number}){
  console.log("Produto recebido: ", produto.name, produto.preco)
}

//exemplo 3 de output
processarFormulario(dados: any) {
  console.log('Dados recebidos:', dados);
}


}
