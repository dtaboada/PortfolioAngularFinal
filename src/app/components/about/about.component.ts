import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { ActivatedRoute, Router } from '@angular/router';

//import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  //personas: persona =new persona("","","","","","","","");
  p: persona[] = [];
  isLogged = false;
  editAcerca=false;
  editaFoto=true;
  editaBanner=true;
  prev: any ='';
  imgPrev= false;
 
  constructor(public personaService: PersonaService, private tokenService: TokenService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
     this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
     }
  }

  cargarEducacion(): void {
    this.personaService.getPersona().subscribe(data=>{this.p=data, console.log(this.p)})
  }

  editAcercaDe():void{
    if (this.editAcerca){
      this.editAcerca=false;
      console.log(false);
    }
    else{
      this.editAcerca=true;
      console.log(true);
    }
  }

  editFoto():void{
    if (this.editaFoto){
      this.editaFoto=false;
      console.log(false);
    }
    else{
      this.editaFoto=true;
      window.location.reload();
      console.log(true);
    }
  }

  editBanner():void{
    if (this.editaBanner){
      this.editaBanner=false;
      console.log(false);
    }
    else{
      this.editaBanner=true
      window.location.reload();
      console.log(true);
    }
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
          this.p[0].foto=x;
        }
        console.log(x);
   }
  }

  file1(event:any) {

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
          this.p[0].banner=x;
        }
        console.log(x);
   }
  }

  onUpdateDatos(persona:persona): void{
    const id = 1;
    console.log(persona);
    this.personaService.updateDatos(id, persona).subscribe(
      data => {
        alert("Datos Modificados Correctamente");
        this.editAcerca=false;
        console.log(data);
      }, err =>{
        alert("Error al Modificar Datos");
        console.log(err);
        this.router.navigate(['/#about']);
      }
    )
  }

  onUpdateFoto(persona:persona): void{
    const id = 1;
    console.log(persona);
    this.personaService.updateFoto(id, persona).subscribe(
      data => {
        alert("Foto Modificada Correctamente");
        this.editaFoto=true;
        console.log(data);
      }, err =>{
        alert("Error al Modificar Foto");
        console.log(err);
        this.router.navigate(['/home']);
      }
    )
  }

  onUpdateBanner(persona:persona): void{
    const id = 1;
    console.log(persona);
    this.personaService.updateBanner(id, persona).subscribe(
      data => {
        alert("Banner Modificado Correctamente");
        this.editaBanner=true;
        console.log(data);
      }, err =>{
        alert("Error al Modificar Banner");
        console.log(err);
        this.router.navigate(['/home']);
      }
    )
  }

}


