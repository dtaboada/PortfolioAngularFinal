import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: skill[] = [];
  skill = new skill("","");
  descripcion: string = "Nuevo Skill";
  porcentaje: string ="50";

  isLogged = false;

  constructor(public skillService: SkillService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarSkill();
   if (this.tokenService.getToken()) {
     this.isLogged = true;
   } else {
     this.isLogged = false;
   }
 }
  
  cargarSkill(): void {
    this.skillService.getSkill().subscribe(data=>{this.skills=data, console.log(this.skills)})
  }

  onUpdate(skill:skill): void{
    console.log(skill)
     this.skill=skill;
    this.skillService.update(this.skill).subscribe(
      data => {
        alert("Skill Modificado Correctamente");
        //this.router.navigate(['/skills']);
       
        console.log(data);
      }, err =>{
        alert("Error al Modificar Skill"); 
        console.log(err);
        this.router.navigate(['/home']);
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          alert("Skill Borrado")
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la Educacion");
        }
      )
    }
  }

  onCreate():void{
    const newSkill = new skill(this.porcentaje,this.descripcion );
    console.log(newSkill);
    this.skillService.save(newSkill).subscribe(
      data => {
        alert("Skill Nuevo Creado");
        this.cargarSkill();
        //window.location.reload();
        //console.log(data)        
      }, err => {
        alert("No se pudo agregar el Skill")
        console.log(err);
        
      }
   )
  }





}

