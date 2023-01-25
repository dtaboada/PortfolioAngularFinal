import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})



export class ExperienciaComponent implements OnInit {

  experiencia: experiencia[] = [];
  isLogged = false;

  constructor(public experienciaService: ExperienciaService,private tokenService: TokenService,
    private router: Router ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  
  cargarExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe(data=>{this.experiencia=data, console.log(this.experiencia)})
  }
  
  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          alert("experiencia Borrada")
          //this.cargarExperiencia();
          //window.location.reload();
          //this.router.navigate(['/home']);
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }



}
