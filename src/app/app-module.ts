import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { ReversePipe } from './pipes/pipes';
import { HttpClientModule } from '@angular/common/http';
import { Users } from './users/users'; // 3 - passo
import { FormsModule } from '@angular/forms';
import { Table } from './components/table/table';
import { MatTableModule } from '@angular/material/table';
import { Pai } from './components/pai/pai';
import { Filho } from './components/filho/filho';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';
import { UsuarioDetalhes } from './usuario-detalhes/usuario-detalhes';
import { TemplateDriven } from './template-driven/template-driven';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario';



@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    Users,
    Table,
    Pai,
    Filho,
    ListaUsuarios,
    UsuarioDetalhes,
    TemplateDriven,
    ReactiveForms,
    CadastroFuncionario,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReversePipe,
    HttpClientModule,
    FormsModule, //É preciso importar para utilizar o ngModule users.html
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
