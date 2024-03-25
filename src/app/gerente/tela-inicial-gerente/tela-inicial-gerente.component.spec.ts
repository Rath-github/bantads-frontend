import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialGerenteComponent } from './tela-inicial-gerente.component';

describe('TelaInicialGerenteComponent', () => {
  let component: TelaInicialGerenteComponent;
  let fixture: ComponentFixture<TelaInicialGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInicialGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
