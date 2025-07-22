import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { JsonplaceHolderService, PeriodicElement } from '../../jsonplace-holder.service';



@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.html',
  styleUrl: './table.css',
})


export class Table {

  constructor(public jsonplaceHolderService:JsonplaceHolderService) {}

  displayedColumns: string[] = ['id', 'userId', 'title', 'body']
  dataSource:  PeriodicElement[] = [];

 getUsers() {
  return this.jsonplaceHolderService
  .getUsers()
  .subscribe((dadoDaAPI: PeriodicElement[])=>{
    this.dataSource = dadoDaAPI;
  })
 }

}














































































































































































  /*

  constructor(private jsonService: JsonplaceHolderService) { // injetando a dependencia par apuxar dados da api
    this.jsonService.getUsers().subscribe((users: any[]) => { // chama os dados com get User

      ELEMENT_DATA = ELEMENT_DATA.map((element, index) => ({//Para cada item da lista ELEMENT_DATA (que já existia com Hydrogen, etc),
        ...element,                                         // pegue a posição correspondente da lista users que veio da API e troque só o nome por user.name.
        name: users[index]?.name || element.name            //Mas se não existir, mantém o nome antigo.

      }));
    
      this.dataSource = ELEMENT_DATA; //“Agora que atualizei os nomes, passo os dados atualizados pra tabela.”
    });
    
  }


}

*/
