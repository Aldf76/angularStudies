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
import { Pai } from './pai/pai';
import { Filho } from './filho/filho';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReversePipe,
    HttpClientModule,
    FormsModule, //É preciso importar para utilizar o ngModule users.html
    MatTableModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
