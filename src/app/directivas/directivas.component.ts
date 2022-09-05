import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  mensaje:string="";
  registrado:boolean=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas:Array<any>;

  constructor() {

    this.entradas=[
      {titulo:"Python cada dia mas presente"},
      {titulo:"Java cada dia mas presente"},
      {titulo:"JasaScript cada dia mas presente"},
      {titulo:"DotNet cada dia mas presente"},
      {titulo:"kotlin cada dia mas presente"}
    ]

  }

  registrarUsuario(){

    this.registrado = true;
    this.mensaje = "Usuario registrado";
  }

  ngOnInit(): void {
  }

}
