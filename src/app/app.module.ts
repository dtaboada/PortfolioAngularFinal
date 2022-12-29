import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectoComponent,
    NewExperienciaComponent,
    LoginComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path:'about',component:AboutComponent},
      {path:'experiencia',component:ExperienciaComponent},
      {path:'educacion',component: EducacionComponent},
      {path:'skills',component: SkillsComponent},
      {path:'proyectos',component: ProyectoComponent},
      {path: 'nuevaexperiencia',component: NewExperienciaComponent},
      {path: 'login',component: LoginComponent},
      {path:'**',component:AboutComponent}
  ])

     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
