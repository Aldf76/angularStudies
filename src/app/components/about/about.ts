import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { JsonplaceHolderService } from '../../jsonplace-holder.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  users: any;

  constructor(
    public jsonplaceHolderService:JsonplaceHolderService
  ) {}


  buscarUsuarios(){ // 4 - passo
    this.jsonplaceHolderService
    .getUsers()
    .subscribe((users: any) => { return(this.users = users) })

}


  
}

/*
Caso eu quisesse retornar na tela e não no console ficaria assim : 

     buscarUsuarios(){ // 4 - passo
    this.jsonplaceHolderService
    .getUsers()
    .subscribe((users: any) => console.log(users)) // 5- passo
  }

*/