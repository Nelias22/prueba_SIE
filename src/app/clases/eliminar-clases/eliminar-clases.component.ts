import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Clase } from '../clase';
import { ClasesService } from '../clases.service';


@Component({
  selector: 'app-eliminar-clases',
  templateUrl: './eliminar-clases.component.html',
  styleUrls: ['./eliminar-clases.component.css']
})
export class EliminarClasesComponent implements OnInit {


  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
  }

  eliminar(id: string){
  	
  		this.clasesService.deleteClase(id);
  			
  }

}
