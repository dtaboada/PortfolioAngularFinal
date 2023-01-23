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
    logo: any = '';
    prev: any ='';
    imgPerv= false;

  constructor(private sExpe : ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

   onCreate():void{
     const expe = new experiencia(this.puesto, this.empresa, this.anioInicio, this.anioFin, this.descripcion,this.logo);
     this.sExpe.save(expe).subscribe(
       data => {
         alert("Experiencia añadida");
         this.router.navigate(['/experiencia']);
         console.log(data)
       }, err => {
         alert("Falló")
         console.log(err);
         //this.router.navigate(['']);
       }
    )
   }

   file(event:any) {

    let file= event.target.files[0];
    let reader= new FileReader();
  
    reader.readAsDataURL(file);
    reader.onload=()=>{
        //aqui ya esta en base64
        let x =reader.result;

        if (file.size > 500000) {
          const tamanioEnMb = 500000 / 10000;
          alert(`El tamaño máximo es ${tamanioEnMb} KB`);
          // Limpiar
          this.imgPerv= false;
          this.prev="";     
        } 
        else {
          this.imgPerv= true;  
          this.prev=x;
          this.logo=x;
        }
       
        console.log(x);
      
   }
   
   
  }
  
}

