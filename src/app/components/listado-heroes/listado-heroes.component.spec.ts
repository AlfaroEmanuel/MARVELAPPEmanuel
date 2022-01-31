import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHeroesComponent } from './listado-heroes.component';

describe('ListadoHeroesComponent', () => {
  let component: ListadoHeroesComponent;
  let fixture: ComponentFixture<ListadoHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
