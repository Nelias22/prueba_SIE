import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Clase } from './clase';
 
@Injectable()
export class ClasesService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private clasesUrl = 'api/clases';  // URL to web api
 
  constructor(private http: Http) { }
 
  getClases(): Promise<Clase[]> {
    return this.http.get(this.clasesUrl)
               .toPromise()
               .then(response => response.json().data as Clase[])
               .catch(this.handleError);
  }
 
 
  getClase(id: string): Promise<Clase> {
    const url = `${this.clasesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Clase)
      .catch(this.handleError);
  }
 
  deleteClase(id: string): Promise<void> {
    const url = `${this.clasesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  create(id: string, nombre: string, observacion: string): Promise<Clase> {
    return this.http
      .post(this.clasesUrl, JSON.stringify({id: id, nombre: nombre, observacion: observacion}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Clase)
      .catch(this.handleError);
  }
 
  update(clase: Clase): Promise<Clase> {
    const url = `${this.clasesUrl}/${clase.id}`;
    return this.http
      .put(url, JSON.stringify(clase), {headers: this.headers})
      .toPromise()
      .then(() => clase)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
  console.log('An error occurred', error); 
    return Promise.reject(error);
  }
}