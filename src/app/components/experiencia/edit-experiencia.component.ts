import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab =new experiencia("","","","","","",);
  prev: any ='';
  imgPrev= false;


  constructor(private sExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detalle(id).subscribe(
      data =>{
        this.expLab = data;
        this.prev=this.expLab.logo ;
      }, err =>{
        alert("Error al modificar experiencia");
        //this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia Modificada Correctamente");
    
        this.router.navigate(['/home']);
        console.log(data);
      }, err =>{
        alert("Error al Modificar Experiencia"); 
        //console.log(this.expLab);
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
          this.imgPrev= false;
          this.prev="";     
        } 
        else {
          this.imgPrev= true;  
          this.prev=x;
          this.expLab.logo=x;
        }
        console.log(x);
   }
  }
}

