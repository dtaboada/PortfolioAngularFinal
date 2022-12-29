import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

    puesto: string = '';
    empresa: string = '';
    anioInicio: string = '';
    anioFin: string = '';
    descripcion: string = '';
    logo: string = '';

  constructor(private sExpe : ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

   onCreate():void{
     const expe = new experiencia(this.puesto, this.empresa, this.anioInicio, this.anioFin, this.descripcion,this.logo);
     this.sExpe.save(expe).subscribe(
       data => {
         alert("Experiencia añadida");
         //this.router.navigate(['']);
         console.log(data)
       }, err => {
         alert("Falló")
         console.log(err);
         //this.router.navigate(['']);
       }
    )
   }
}
//   onCreate():void{
//      const expe = new experiencia(this.puesto, this.empresa, this.anioInicio, this.anioFin, this.descripcion,this.logo);
//      this.sExpe.save(expe).subscribe( {
//       next: (v) => console.log(v) ,
//       error: (e) => console.error(e),
//      complete: () => console.info('complete') 
     
//    })

// }

