import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL='http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  
 public getEducacion(): Observable<educacion[]>{
    return  this.http.get<educacion[]> (this.URL+'traer')
  }

  public save(experiencia : educacion): Observable<any>{
    // console.log('llega aca');
     return this.http.post<any> (this.URL+'crear', experiencia);
 
   }
 
   public update(id : number, experiencia : educacion): Observable<any>{
     return this.http.put<any> (this.URL+`editar/${id}`, experiencia);
 
   }
 
   public delete(id : number): Observable<any>{
     return this.http.delete<any> (this.URL+`borrar/${id}`);
   }

  public detalle(id: number): Observable<educacion>{
  return this.http.get<educacion>(this.URL + `detalle/${id}`);
  } 

}