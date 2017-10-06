import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Estudiante } from './estudiante';
 
@Injectable()
export class EstudiantesService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private estudiantesUrl = 'api/estudiantes';  
 
  constructor(private http: Http) { }
 
  getEstudiantes(): Promise<Estudiante[]> {
    return this.http.get(this.estudiantesUrl)
               .toPromise()
               .then(response => response.json().data as Estudiante[])
               .catch(this.handleError);
  }
 
 
  getEstudiante(id: string): Promise<Estudiante> {
    const url = `${this.estudiantesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Estudiante)
      .catch(this.handleError);
  }
 
  deleteEstudiante(id: string): Promise<void> {
    const url = `${this.estudiantesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  create(id: string, nombre: string, apellido: string, genero: string): Promise<Estudiante> {
    return this.http
      .post(this.estudiantesUrl, JSON.stringify({id: id, nombre: nombre, apellido: apellido, genero: genero}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Estudiante)
      .catch(this.handleError);
  }
 
  update(estudiante: Estudiante): Promise<Estudiante> {
    const url = `${this.estudiantesUrl}/${estudiante.id}`;
    return this.http
      .put(url, JSON.stringify(estudiante), {headers: this.headers})
      .toPromise()
      .then(() => estudiante)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); 
    return Promise.reject(error);
  }
}