import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { User } from './user';
 
@Injectable()
export class UsersService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'api/users';  
 
   constructor(private http: Http) { }
 
  getUser(name: string): Promise<User> {
    const url = `${this.usersUrl}?user=${name}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }
 
 
 
  create(user: string, pass:string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({user: user, pass: pass}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }
 
 
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error); 
    return Promise.reject(error);
  }
}