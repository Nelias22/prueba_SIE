import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ClasesComponent } from './clases/clases.component';

import { RegistrarEstudiantesComponent } from './estudiantes/registrar-estudiantes/registrar-estudiantes.component';
import { ModificarEstudiantesComponent } from './estudiantes/modificar-estudiantes/modificar-estudiantes.component';
import { EliminarEstudiantesComponent } from './estudiantes/eliminar-estudiantes/eliminar-estudiantes.component';
import { RegistrarProfesoresComponent } from './profesores/registrar-profesores/registrar-profesores.component';
import { ModificarProfesoresComponent } from './profesores/modificar-profesores/modificar-profesores.component';
import { EliminarProfesoresComponent } from './profesores/eliminar-profesores/eliminar-profesores.component';
import { RegistrarClasesComponent } from './clases/registrar-clases/registrar-clases.component';
import { ModificarClasesComponent } from './clases/modificar-clases/modificar-clases.component';
import { EliminarClasesComponent } from './clases/eliminar-clases/eliminar-clases.component';

const routes: Routes = [
          {
            path: 'home',
            component:AppComponent
          },
           {
            path: 'estudiantes',
            component:EstudiantesComponent
          },
           {
            path: 'profesores',
            component:ProfesoresComponent
          },
           {
            path: 'clases',
            component:ClasesComponent
          },
          {
            path: 'estudiantes/registrar',
            component:RegistrarEstudiantesComponent
          },
          {
            path: 'estudiantes/modificar',
            component:ModificarEstudiantesComponent
          },
          {
            path: 'estudiantes/eliminar',
            component:EliminarEstudiantesComponent
          },

      ]




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
