import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCursoComponent } from './item-curso.component';

describe('ItemCursoComponent', () => {
  let component: ItemCursoComponent;
  let fixture: ComponentFixture<ItemCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
