import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
//debes de borrar esto y en el imports
import { AppComponent } from './app.component';
import {SaludarComponent } from './componentes/saludar.component';
import { FormAppComponent } from './componentes/form-app/form-app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppRoutingModule } from './app-routing.module';
//el import de saludar viene de la clase que se va a usar
//aqui se usa esa clase que se hizo publica en el ts (export)

@NgModule({
  declarations: [
    //aqui se declaran los componentes 
    //que se van a usar para todo el proyecto
    AppComponent,
    SaludarComponent,
    FormAppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
