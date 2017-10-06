import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Profesor } from '../profesor';
import { ProfesoresService } from '../profesores.service';

@Component({
  selector: 'app-modificar-profesores',
  templateUrl: './modificar-profesores.component.html',
  styleUrls: ['./modificar-profesores.component.css']
})
export class ModificarProfesoresComponent implements OnInit {
	profesorEncontrado: Profesor;
	nF: string;
	nombre: string;
	apellido: string;
	genero: string;
  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit() {
  }

  buscar(id: string){
  	
  	this.profesoresService.getProfesor(id).then(profesor=>{ 
  			this.profesorEncontrado = profesor,
  			this.nombre = this.profesorEncontrado.nombre;
  			this.apellido = this.profesorEncontrado.apellido;
  			this.genero = this.profesorEncontrado.genero;
  			this.nF = "";
  		},
  		reason => this.nF = "No se encontró el profesor" );
  		 		
  		
  }

  modificar(){
  	this.profesorEncontrado = {id: this.profesorEncontrado.id, 
  								nombre:this.nombre, 
  								apellido: this.apellido, 
  								genero: this.genero
  								}
  	this.profesoresService.update(this.profesorEncontrado);
  			
  }
}
