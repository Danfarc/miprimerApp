import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Daniel";
  apellido = "Arana";
  edad = 15;
  empresa2 = "Alumina";

  textDeRegistro ="No hay nadie registrado";

  habilitarCuadro = false;
  usuRegistrado = false;

  cambiarEmpresa2(event:Event){
    this.empresa2=(<HTMLInputElement>event.target).value;
  }

  getRegistroUsuario(){
    this.usuRegistrado =false;
  }
  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de resgistrar");
    if((<HTMLInputElement>event.target).value =="Si"){
      this.textDeRegistro ="El usuario se acaba de Registar";
    }else{
      this.textDeRegistro ="No hay nadie registrado";
    }
    console.log(event.target);
    alert(event.target);

  }

  llamaEmpresa(value:string){}

  constructor() { }

  ngOnInit(): void {
  }

}
