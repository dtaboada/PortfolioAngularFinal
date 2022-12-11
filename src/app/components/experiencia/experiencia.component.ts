import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  experiencia: experiencia[] = [];

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data=>{this.experiencia=data, console.log(this.experiencia)})
  }
  
}
