import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEstudiantesComponent } from './modificar-estudiantes.component';

describe('ModificarEstudiantesComponent', () => {
  let component: ModificarEstudiantesComponent;
  let fixture: ComponentFixture<ModificarEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
