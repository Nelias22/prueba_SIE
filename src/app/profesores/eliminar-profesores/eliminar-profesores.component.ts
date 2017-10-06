import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Profesor } from '../profesor';
import { ProfesoresService } from '../profesores.service';


@Component({
  selector: 'app-eliminar-profesores',
  templateUrl: './eliminar-profesores.component.html',
  styleUrls: ['./eliminar-profesores.component.css']
})
export class EliminarProfesoresComponent implements OnInit {


  constructor(private profesoresService: ProfesoresService) { }

  ngOnInit() {
  }

  eliminar(id: string){
  	
  		this.profesoresService.deleteProfesor(id);
  			
  }

}
