import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectoComponent implements OnInit {


  proyecto: proyecto[] = [];
  isLogged = false;

  constructor(public proyectoService: ProyectoService,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyecto();
   if (this.tokenService.getToken()) {
     this.isLogged = true;
   } else {
     this.isLogged = false;
   }
 }
 cargarProyecto(){
   this.proyectoService.getProyecto().subscribe(data=>{this.proyecto=data, console.log(this.proyecto)})
 }

 delete(id?: number){
  if(id != undefined){
    this.proyectoService.delete(id).subscribe(
      data => {
        alert("Proyecto Borrado")
        this.cargarProyecto();
      }, err => {
        alert("No se pudo borrar el Proyecto");
      }
    )
  }
}
}
