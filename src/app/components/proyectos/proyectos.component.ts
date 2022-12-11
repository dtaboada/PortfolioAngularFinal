import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectoComponent implements OnInit {


  proyect: proyecto[] = [];

  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data=>{this.proyect=data, console.log(this.proyect)})
  }

}
