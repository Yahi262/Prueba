import { Component } from '@angular/core';
/*este es el componente padre*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FUNDAMENTOS';
  name = 'Ines';//variable en el componente nueva y vale ines y se envia la variable nombre que es nombre
  onSaludar(mensaje){/*funcion, que recibira un mensaje para mostrarlo en consola*/
    console.log(mensaje);//aqui recibe lo que envian del componente hijo y lo esta imprimiendo
  }
}
