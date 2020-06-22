import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FormAppComponent } from './componentes/form-app/form-app.component';
import { SaludarComponent } from './componentes/saludar.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'form', component:FormAppComponent},
  {path: 'componentes', component:SaludarComponent},
  {path: '**', pathMatch: 'full', redirectTo:'app-home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
