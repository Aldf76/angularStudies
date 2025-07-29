import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // serve para acessar as informações da URL cmo Parâmetros, querys..

@Component({
  selector: 'app-usuario-detalhes',
  standalone: false,
  templateUrl: './usuario-detalhes.html',
  styleUrl: './usuario-detalhes.css',
})
export class UsuarioDetalhes {

  @Input() id: number = 0; //tive inicializar pois o angular pediu




  // injeção de dependência, pedindo uma instancia da rota ativada atual
  // por que é private ? Fazer isso declara e armazena o route como propriedade privada da classe, significa que não preciso fazer this.route = route
  constructor(private route: ActivatedRoute) {}

  // Método de 'ciclo de vida' do componente que se aciona imediatamente quando o componente é inicializado
  ngOnInit() {
    // o que é o paramMap ? É um observable que emite um Map com os parâmetros da rota
    // depois escolhemos o parâmetro em params.get('id') 
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id'); //// 'id' é a chave, valor pode ser "3"
    });
  }














}


/* O que significa dizer que algo é um Observable ? 
Significa qe é uma fonte de dados assíncronos que você pode "escutar".
Essa fonte NÃO me dá o dado imediatamente , só avisa quando está pronto.
E por isso se usa o subscribe ! Para "ativar" o observable e executar a lógica interna dele para escutar os dados que foram por ele emitidos.

*/