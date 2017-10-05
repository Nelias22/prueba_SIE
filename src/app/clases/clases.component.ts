import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Clase } from './clase';
import { ClasesService } from './clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
	listaClases: Clase[];
  constructor(private http: Http, private clasesService: ClasesService) { }

  listarClases(){
  		this.clasesService.getClases().then(clases=> this.listaClases=clases);
  }

  ngOnInit() {
  		this.listarClases();
  }

}