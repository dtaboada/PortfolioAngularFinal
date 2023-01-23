import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL='http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) {}

  public getProyecto(): Observable<proyecto[]>{
    return  this.http.get<proyecto[]> (this.URL+'traer')
  }

  
  public save(experiencia : proyecto): Observable<any>{
    // console.log('llega aca');
     return this.http.post<any> (this.URL+'crear', experiencia);
 
   }
 
   public update(id : number, experiencia : proyecto): Observable<any>{
     return this.http.put<any> (this.URL+`editar/${id}`, experiencia);
 
   }
 
   public delete(id : number): Observable<any>{
     return this.http.delete<any> (this.URL+`borrar/${id}`);
   }

  public detalle(id: number): Observable<proyecto>{
  return this.http.get<proyecto>(this.URL + `detalle/${id}`);
  } 
}