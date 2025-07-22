import { Component } from '@angular/core';
import { starWarsService } from '../star-wars.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  idDigitado: number = 0; // ligado ao input
  films: { title: string }[] = []; // só para exibir o título
  users: any;
  gender: any;

  constructor(public starWarsService: starWarsService) {} // aqui estou injetando a dependência ( serviço )

  buscarUsuarios() {
    this.starWarsService
      .getUserById(this.idDigitado) // método criado no serviço
      .subscribe((users: any) => {
        //informará as notificações acerca desse fluxo de dados ( subscribe )
        this.users = users;
        this.films = [];
        this.gender = String;

        users.films.forEach((filmUrl: string) => {
          this.starWarsService.getFilm(filmUrl).subscribe((film: any) => {
            this.films.push(film.title);
          });
        });
      });
  }
}

/*

buscarUsuarios() {
  this.starwarsService.getUsers().subscribe((usuarios: any) => {
    this.users = usuarios.results || [];
    this.users = usuarios.results.forEach((user: any) => {
      user.filmTitles = [];
    });
  });

  // this.users.forEach((user: any) => {
  //   user.filmTitles = [];
  //   if (user.films) {
  //     user.films.forEach((filmUrl: string) => {
  //       this.starwarsService.getFilm(filmUrl).subscribe((film: any) => {
  //         user.filmTitles.push(film.title);
  //       });
  //     });
  //   }
  // });
}

*/