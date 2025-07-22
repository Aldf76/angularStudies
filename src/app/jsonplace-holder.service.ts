import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({ // dependência injetável.
  providedIn: 'root'
})

export class JsonplaceHolderService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getUsers(): any {
    return this.http.get(this.apiUrl);
  }

}
