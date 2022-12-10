import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  //personas: persona =new persona("","","","","","","","");
  p: persona[] = [];

 
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
     this.personaService.getPersona().subscribe(data=>{this.p=data, console.log(this.p)})
       
  }
 

}
