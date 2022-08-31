import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {


  numero1:string="0";
  numero2:string="0";
  resultado:number=0;

  suma():void{
    this.resultado=parseInt(this.numero1) + parseInt(this.numero2);
  }
  restar():void{
    this.resultado=parseInt(this.numero1) - parseInt(this.numero2);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
