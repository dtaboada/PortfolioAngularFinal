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
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';



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
    EditExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path:'about',component:AboutComponent},
      {path: 'login',component: LoginComponent},

      {path:'experiencia',component:ExperienciaComponent},
      {path: 'nuevaexperiencia',component: NewExperienciaComponent},
      {path: 'editarexperiencia/:id',component: EditExperienciaComponent},

      {path:'educacion',component: EducacionComponent}, 
      {path: 'nuevaeducacion',component: NewEducacionComponent},
      {path: 'editareducacion/:id',component: EditEducacionComponent},
      
      {path:'proyectos',component: ProyectoComponent},
      {path:'nuevoproyecto',component: NewProyectoComponent},
      {path: 'editarproyecto/:id',component: EditProyectoComponent},
     
      {path:'skills',component: SkillsComponent},
     
     
      
      {path:'**',component:AboutComponent}
  ])

     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
