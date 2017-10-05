import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ClasesComponent } from './clases/clases.component';

import {EstudiantesService} from './estudiantes/estudiantes.service';
import {ProfesoresService} from './profesores/profesores.service';
import {ClasesService} from './clases/clases.service';


import { RegistrarEstudiantesComponent } from './estudiantes/registrar-estudiantes/registrar-estudiantes.component';
import { ModificarEstudiantesComponent } from './estudiantes/modificar-estudiantes/modificar-estudiantes.component';
import { EliminarEstudiantesComponent } from './estudiantes/eliminar-estudiantes/eliminar-estudiantes.component';
import { RegistrarProfesoresComponent } from './profesores/registrar-profesores/registrar-profesores.component';
import { ModificarProfesoresComponent } from './profesores/modificar-profesores/modificar-profesores.component';
import { EliminarProfesoresComponent } from './profesores/eliminar-profesores/eliminar-profesores.component';
import { RegistrarClasesComponent } from './clases/registrar-clases/registrar-clases.component';
import { ModificarClasesComponent } from './clases/modificar-clases/modificar-clases.component';
import { EliminarClasesComponent } from './clases/eliminar-clases/eliminar-clases.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    ClasesComponent,
    RegistrarEstudiantesComponent,
    ModificarEstudiantesComponent,
    EliminarEstudiantesComponent,
    RegistrarProfesoresComponent,
    ModificarProfesoresComponent,
    EliminarProfesoresComponent,
    RegistrarClasesComponent,
    ModificarClasesComponent,
    EliminarClasesComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [EstudiantesService,
              ProfesoresService,
              ClasesService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
