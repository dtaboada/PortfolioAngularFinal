import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //URL='http://localhost:8080/personas/';
  URL='https://portfoliodiego.onrender.com/personas/'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona[]>{
    return  this.http.get<persona[]> (this.URL+'traer')
  }

  public updateDatos(id : number, persona : persona): Observable<any>{
    console.log(persona);
    return this.http.put<any> (this.URL+`editardatos/${id}`, persona);

  }

  public updateFoto(id : number, persona : persona): Observable<any>{
    console.log(persona);
    return this.http.put<any> (this.URL+`editarfoto/${id}`, persona);

  }

  public updateBanner(id : number, persona : persona): Observable<any>{
    console.log(persona);
    return this.http.put<any> (this.URL+`editarbanner/${id}`, persona);

  }
}
