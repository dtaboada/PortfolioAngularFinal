import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  titulo: String = "";
  institucion: String = "";
  anioInicio: String = "";
  anioFin: String = "";
  descripcion: String = "";
  logo: any = "";
  prev: any = "";
  imgPrev = false;

  constructor( private sEduc: EducacionService, private router: Router ) {

   }

  ngOnInit(): void {
  }

  onCreate():void{
     const educ = new educacion(this.titulo, this.institucion, this.anioInicio, this.anioFin, this.descripcion,this.logo);
     this.sEduc.save(educ).subscribe(
       data => {
         alert("Educacion añadida");
         this.router.navigate(['/home']);
         console.log(data)
       }, err => {
         alert("Falló")
         console.log(err);
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
          this.imgPrev= false;
          this.prev="";     
        } 
        else {
          this.imgPrev= true;  
          this.prev=x;
          this.logo=x;
        }
        console.log(x);
   } 
  }
}
 