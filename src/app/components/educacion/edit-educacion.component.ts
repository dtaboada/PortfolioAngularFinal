import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion = new educacion("","","","","","");
  prev: any ='';
  imgPerv= false;

  constructor(private sEducacion :EducacionService, private activatedRouter: ActivatedRoute,
              private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detalle(id).subscribe(
      data =>{
        this.educacion = data;
        this.prev=this.educacion.logo ;
      }, err =>{
        alert("Error al modificar experiencia");
        //this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        alert("Educación Modificada Correctamente");
        this.router.navigate(['/home']);
        console.log(data);
      }, err =>{
        alert("Error al Modificar Educacion"); 
        console.log(err);
        //this.router.navigate(['/home']);
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
          this.educacion.logo=x;
        }
        console.log(x);
   }
  }
}