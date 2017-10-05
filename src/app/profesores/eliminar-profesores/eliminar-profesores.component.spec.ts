import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProfesoresComponent } from './eliminar-profesores.component';

describe('EliminarProfesoresComponent', () => {
  let component: EliminarProfesoresComponent;
  let fixture: ComponentFixture<EliminarProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
