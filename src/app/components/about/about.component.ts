import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  misDatos:any;

  constructor( private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data=>{console.log(data),
    this.misDatos=data;
    });
    
  }

}
