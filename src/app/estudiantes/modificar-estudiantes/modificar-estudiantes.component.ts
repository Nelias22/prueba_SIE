import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-modificar-estudiantes',
  templateUrl: './modificar-estudiantes.component.html',
  styleUrls: ['./modificar-estudiantes.component.css']
})
export class ModificarEstudiantesComponent implements OnInit {
	estudianteEncontrado: Estudiante;
	nF: string;
	nombre: string;
	apellido: string;
	genero: string;
  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
  }

  buscar(id: string){
  	
  	this.estudiantesService.getEstudiante(id).then(estudiante=>{ 
  			this.estudianteEncontrado = estudiante,
  			this.nombre = this.estudianteEncontrado.nombre;
  			this.apellido = this.estudianteEncontrado.apellido;
  			this.genero = this.estudianteEncontrado.genero;
  			this.nF = "";
  		},
  		reason => this.nF = "No se encontró el estudiante" );
  		 		
  		
  }

  modificar(){
  	this.estudianteEncontrado = {id: this.estudianteEncontrado.id, 
  								nombre:this.nombre, 
  								apellido: this.apellido, 
  								genero: this.genero
  								}
  	this.estudiantesService.update(this.estudianteEncontrado);
  			
  }
}
