import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarGerenteComponent } from './gerenciar-gerente.component';

describe('GerenciarGerenteComponent', () => {
  let component: GerenciarGerenteComponent;
  let fixture: ComponentFixture<GerenciarGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarGerenteComponent]
    });
    fixture = TestBed.createComponent(GerenciarGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
