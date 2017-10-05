import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarClasesComponent } from './eliminar-clases.component';

describe('EliminarClasesComponent', () => {
  let component: EliminarClasesComponent;
  let fixture: ComponentFixture<EliminarClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
