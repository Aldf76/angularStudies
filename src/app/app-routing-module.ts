
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../app/components/home/home';
import { About } from './components/about/about';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { UsuarioDetalhes } from './usuario-detalhes/usuario-detalhes';

const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: Home }, // Ir para http://localhost:4200/ → exibe o componente HomeComponent.
  {path:'usuarios/:id', component: UsuarioDetalhes},
  {path:'usuarios', component: ListaUsuarios},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

