import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto = new proyecto("","","",""); 

  constructor(private sProyecto: ProyectoService ,private activatedRouter: ActivatedRoute,
    private router: Router) { }

  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyecto.detalle(id).subscribe(
        data =>{
          this.proyecto = data;
        
        }, err =>{
          alert("Error al modificar Proyecto");
          //this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyecto.update(id, this.proyecto).subscribe(
        data => {
          alert("Proyecto Modificado Correctamente");
          this.router.navigate(['/proyectos']);
          console.log(data);
        }, err =>{
          alert("Error al Modificar Proyecto"); 
          //console.log(this.expLab);
          console.log(err);
          //this.router.navigate(['/proyecto']);
        }
      )
    }

}
