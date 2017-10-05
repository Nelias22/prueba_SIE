import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProfesoresComponent } from './modificar-profesores.component';

describe('ModificarProfesoresComponent', () => {
  let component: ModificarProfesoresComponent;
  let fixture: ComponentFixture<ModificarProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
