import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  titulo: String = "";
  anio: String = "";
  descripcion: String = "";
  link: String = "";
     

  constructor(private sProyect: ProyectoService,  private router: Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const proyect = new proyecto(this.titulo, this.anio, this.link, this.descripcion,);
    this.sProyect.save(proyect).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['/home']);
        console.log(data)
      }, err => {
        alert("Falló")
        console.log(err);
        //this.router.navigate(['/proyectos']);
      }
   )
  }
}
