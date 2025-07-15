import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceHolderService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // 1 passo

getUsers(){// fazendo requisições HTTP !!  // 2 passo
  return this.http.get(this.apiUrl) 
}

 }

