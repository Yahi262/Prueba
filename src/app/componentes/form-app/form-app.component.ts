import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent{
  myForm: FormGroup;
  constructor(public fb:FormBuilder) { 
    this.myForm=this.fb.group({
      id: ['',Validators.required],
      nombre:['',Validators.required],
      direccion:['',Validators.required]
    })
  }
  saveData(){
    console.log(this.myForm.value);
  }
  /*
  public alumnos:Array<string>=[];
  public alumLista: string = "";

  ngOnInit(): void {
  }
  onButtonClick(){
    this.alumnos.push(this.alumLista);
    this.alumLista='';
    console.log(this.alumnos);
  }*/

}
