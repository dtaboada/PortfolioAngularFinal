import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL='http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

   public getExperiencia(): Observable<experiencia[]>{
     return  this.http.get<experiencia[]> (this.URL+'traer')
   }

  public save(experiencia : experiencia): Observable<any>{
   // console.log('llega aca');
    return this.http.post<any> (this.URL+'crear', experiencia);

  }

  public update(id : number, experiencia : experiencia): Observable<any>{
    return this.http.put<any> (this.URL+`editar/${id}`, experiencia);

  }

  public delete(id : number): Observable<any>{
    return this.http.delete<any> (this.URL+`borrar/${id}`);

  } 
    public detalle(id: number): Observable<experiencia>{
      return this.http.get<experiencia>(this.URL + `detalle/${id}`);
  } 

  }
