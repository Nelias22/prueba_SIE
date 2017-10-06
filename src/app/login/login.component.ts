import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	msg: string;
	
  constructor(private http: Http, private usersService: UsersService) { }

  

  ngOnInit() {
  		
  }

  iniciarSesion(user:string, pass: string){
  	this.usersService.getUser(user).then(user=>{
  		if (user.pass == pass) {
  			this.msg="Sesión Iniciada Correctamente";
  		}
  		else{ 
  			this.msg="Contraseña incorrecta";
  		}
  	}, reason=> this.msg="No se encontró el usuario");
  }

  crearCuenta(user: string, pass: string){
  	this.usersService.create(user,pass);
  	this.msg="Cuenta Creada";
  }



}
