import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { UsersService } from './users.service';
import { Location }     from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	msg: string;

	
  constructor(private http: Http, private usersService: UsersService, private location: Location) { }

  

  ngOnInit() {
  		
  }

  iniciarSesion(user:string, pass: string){
  	this.usersService.getUser(user).then(user=>{

  		if (user["0"] != undefined) {			
  		
  			if (user["0"].pass == pass) {
  			this.msg="Sesión Iniciada Correctamente";
  			this.location.back();

  			}
  			else{ 
  			this.msg="Contraseña Incorrecta";
  			}
  		}
  		else{
  			this.msg="No se encontró el usuario"
  		}
  	}, reason=> this.msg="No se encontró el usuario");
  }

  crearUsuario(user: string, pass: string){
  	this.usersService.create(user,pass);
  	this.msg="Cuenta Creada";
  }



}
