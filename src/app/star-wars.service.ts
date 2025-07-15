import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // torna o serviço disponível globalmente
})


export class starWarsService{

constructor (private http: HttpClient) {}

private apiUrl = 'https://swapi.co/api/people';

getUsers(){// fazendo requisições HTTP !!  // 2 passo
  return this.http.get(this.apiUrl) 
}

//Para buscar filmes, pois filmes possuem um próprio endpoint 
getFilm(url: string) {
  return this.http.get(url);
}

// buscar individualmente
getUserById(id: number) {
  const url = `https://swapi.bry.com.br/api/people/${id}/`;
  return this.http.get(url);
}





}

