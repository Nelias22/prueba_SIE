import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Profesor } from '../profesor';
import { ProfesoresService } from '../profesores.service';

@Component({
  selector: 'app-registrar-profesores',
  templateUrl: './registrar-profesores.component.html',
  styleUrls: ['./registrar-profesores.component.css']
})
export class RegistrarProfesoresComponent implements OnInit {

  constructor( private profesoresService: ProfesoresService) { }

  ngOnInit() {
  }

  registrar(id: string, nombre: string, apellido: string, genero: string){
  		this.profesoresService.create(id,nombre,apellido,genero);
  }

}
