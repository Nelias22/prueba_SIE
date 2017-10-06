import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Profesor } from './profesor';
 
@Injectable()
export class ProfesoresService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private profesoresUrl = 'api/profesores';  
 
  constructor(private http: Http) { }
 
  getProfesores(): Promise<Profesor[]> {
    return this.http.get(this.profesoresUrl)
               .toPromise()
               .then(response => response.json().data as Profesor[])
               .catch(this.handleError);
  }
 
 
  getProfesor(id: string): Promise<Profesor> {
    const url = `${this.profesoresUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Profesor)
      .catch(this.handleError);
  }
 
  deleteProfesor(id: string): Promise<void> {
    const url = `${this.profesoresUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  create(id: string, nombre: string, apellido: string, genero: string): Promise<Profesor> {
    return this.http
      .post(this.profesoresUrl, JSON.stringify({id: id, nombre: nombre, apellido: apellido, genero: genero}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Profesor)
      .catch(this.handleError);
  }
 
  update(profesor: Profesor): Promise<Profesor> {
    const url = `${this.profesoresUrl}/${profesor.id}`;
    return this.http
      .put(url, JSON.stringify(profesor), {headers: this.headers})
      .toPromise()
      .then(() => profesor)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
   console.log('An error occurred', error); 
    return Promise.reject(error);
  }
}