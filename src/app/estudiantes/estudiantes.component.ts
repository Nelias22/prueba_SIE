import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Estudiante } from './estudiante';
import { EstudiantesService } from './estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
	listaEstudiantes: Estudiante[];
  constructor(private http: Http, private estudiantesService: EstudiantesService) { }

  listarEstudiantes(){
  		this.estudiantesService.getEstudiantes().then(estudiantes=> this.listaEstudiantes=estudiantes);
  }

  ngOnInit() {
  		this.listarEstudiantes();
  }



}
