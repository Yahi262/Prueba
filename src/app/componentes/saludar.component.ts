import { Component, Input, Output, EventEmitter } from "@angular/core";//esto se necesita para crear un decorador
/* componente hijo*/
//eventemmit es para los eventos
@Component(
    {//van adentro los metadatos
        selector: 'saludar-app',
        templateUrl: './saludar.component.html', //es la ruta donde esta la plantilla
        styleUrls: ['./saludar.component.css']//se abre un arreglo, con el nombre del archivo
        //y se usa un arreglo porque son varios factores que pueden ayudar con la plantilla
        
        
        /* styles: [`p{
            font-size: 5.5em
        }`]  sucede lo mismo que el template, es funcional porque afecta al parrafo 
        pero no se debe de hacer
        */
        /*template: //`<p>Buenas tardes</p>` se quita porque no es viable*/
                
    }
    //template es decir la plantilla en html: 
    //los 2 puntos es para agregar las etiquetas(pueden ser agregadas directamente o desde el html)
    // para agregarlas se necesita backtip estas --> ``, esto sale con (alt gr + la tecla de la "}")
)

export class SaludarComponent{
    @Input() public nombre:string;
    /*puedes usar public o no, ya que por defecto se considera publico
    con el input se indica que la variable nombre, el componente entiende que la entrada vendra de otro archivo, osea que viene de saluda-app
    aqui no se encuentra el valor sino el atributo y este valor llegara de app-component
    ya que ahi se le dio valor a nombre*/
    @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
    //aqui decimos que este evento va a tratar datos generales como lo son las cadenas
    //y se va a crear un nuevo event emmiter y el tipo de dato que va manejar junto con su constructor
    
    public nombres: Array<string>=[];
    public nombreLista: string=" ";
    constructor(){
       /* this.nombre="Yahis"*/ //aqui se esta agregando un valor a nombre
    }

    onClick(){
        this.saludar.emit('Hola! saludos desde el componente hijo x)');
        //lo que hara esta funcion es enviar una cadena cuando se de click
        //cabe hacer mencion que ahora el proceso es a la inversa, que va desde el hijo hacia el padre
    }

    onButtonClick(){
        this.nombres.push(this.nombreLista);
        this.nombreLista = '';
        console.log(this.nombres)
    }
}//esto es como para dar a conocer la clase