import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Clase } from '../clase';
import { ClasesService } from '../clases.service';

@Component({
  selector: 'app-modificar-clases',
  templateUrl: './modificar-clases.component.html',
  styleUrls: ['./modificar-clases.component.css']
})
export class ModificarClasesComponent implements OnInit {
	claseEncontrada: Clase;
	nF: string;
	nombre: string;
	observacion: string;
  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
  }

  buscar(id: string){
  	
  	this.clasesService.getClase(id).then(clase=>{ 
  			this.claseEncontrada = clase,
  			this.nombre = this.claseEncontrada.nombre;
  			this.observacion = this.claseEncontrada.observacion
  			this.nF = "";
  		},
  		reason => this.nF = "No se encontró la clase" );
  		 		
  		
  }

  modificar(){
  	this.claseEncontrada = {id: this.claseEncontrada.id, 
  								nombre:this.nombre, 
  								observacion: this.observacion
  								}
  	this.clasesService.update(this.claseEncontrada);
  			
  }
}
