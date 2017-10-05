import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClasesComponent } from './modificar-clases.component';

describe('ModificarClasesComponent', () => {
  let component: ModificarClasesComponent;
  let fixture: ComponentFixture<ModificarClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
