import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: educacion[] = [];
  
  constructor(public educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data=>{this.educacion=data, console.log(this.educacion)})
  }
}