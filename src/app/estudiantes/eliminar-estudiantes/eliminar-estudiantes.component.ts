import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../estudiantes.service';


@Component({
  selector: 'app-eliminar-estudiantes',
  templateUrl: './eliminar-estudiantes.component.html',
  styleUrls: ['./eliminar-estudiantes.component.css']
})
export class EliminarEstudiantesComponent implements OnInit {


  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
  }

  eliminar(id: string){
  	
  		this.estudiantesService.deleteEstudiante(id);
  			
  }

}
