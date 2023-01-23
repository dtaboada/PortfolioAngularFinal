import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL='http://localhost:8080/skill/';  

  constructor(private http: HttpClient) { }

public getSkill(): Observable<skill[]>{
  return  this.http.get<skill[]> (this.URL+'traer')
  } 

  public update(skill : skill): Observable<any>{
    //console.log("este es el id"+skill.id);
    return this.http.put<any> (this.URL+'editar/'+skill.id+'?descripcion='+skill.descripcion+'&porcentaje='+skill.porcentaje,{
    });
  }

  public delete(id : number): Observable<any>{
    return this.http.delete<any> (this.URL+`borrar/${id}`);
  }

  public save(newSkill : skill): Observable<any>{
    return this.http.post<any> (this.URL+'crear', newSkill);
  }
}