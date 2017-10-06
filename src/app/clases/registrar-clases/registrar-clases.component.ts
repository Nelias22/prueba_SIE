import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Clase } from '../clase';
import { ClasesService } from '../clases.service';

@Component({
  selector: 'app-registrar-clases',
  templateUrl: './registrar-clases.component.html',
  styleUrls: ['./registrar-clases.component.css']
})
export class RegistrarClasesComponent implements OnInit {

  constructor( private clasesService: ClasesService) { }

  ngOnInit() {
  }

  registrar(id:string,nombre: string, observacion: string){
  		this.clasesService.create(id,nombre,observacion);
  }

}
