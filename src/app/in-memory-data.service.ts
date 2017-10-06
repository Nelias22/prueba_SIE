import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const estudiantes = [
      { id: 0,  nombre: 'Prueba', apellido:'Alumno', genero:'Otro' },
      { id: 1,  nombre: 'Prueba2', apellido:'Alumno2', genero:'Otro' }
      
    ];
    const profesores = [
      { id: 0,  nombre: 'Prueba', apellido:'Profesor', genero:'Otro' },
      { id: 1,  nombre: 'Prueba2', apellido:'Profesor2', genero:'Otro' }
 
    ];
    const clases = [
    
      { id: 0,  nombre: 'Prueba', observacion:'Observación' },
      { id: 1,  nombre: 'Prueba2', observacion:'Observación2' }
 
    ];

    const users = [
        {id:0, user: 'admin', pass: 'admin'}
    ];
    return {
      estudiantes,
      profesores,
      clases,
      users
    };
  }
}