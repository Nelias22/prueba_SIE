import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Profesor } from './Profesor';
import { ProfesoresService } from './profesores.service';

@Component({
  selector: 'app-Profesores',
  templateUrl: './Profesores.component.html',
  styleUrls: ['./Profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
	listaProfesores: Profesor[];
  constructor(private http: Http, private ProfesoresService: ProfesoresService) { }

  listarProfesores(){
  		this.ProfesoresService.getProfesores().then(Profesores=> this.listaProfesores=Profesores);
  }

  ngOnInit() {
  		this.listarProfesores();
  }

}
