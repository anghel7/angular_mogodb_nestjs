import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEStudiantesComponent } from './lista-estudiantes.component';

describe('ListaEStudiantesComponent', () => {
  let component: ListaEStudiantesComponent;
  let fixture: ComponentFixture<ListaEStudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEStudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEStudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
