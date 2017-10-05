import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarClasesComponent } from './registrar-clases.component';

describe('RegistrarClasesComponent', () => {
  let component: RegistrarClasesComponent;
  let fixture: ComponentFixture<RegistrarClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
