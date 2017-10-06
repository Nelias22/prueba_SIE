import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-registrar-estudiantes',
  templateUrl: './registrar-estudiantes.component.html',
  styleUrls: ['./registrar-estudiantes.component.css']
})
export class RegistrarEstudiantesComponent implements OnInit {

  constructor( private estudiantesService: EstudiantesService) { }

  ngOnInit() {
  }

  registrar(id: string, nombre: string, apellido: string, genero: string){
  		this.estudiantesService.create(id,nombre,apellido,genero);
  }

}
