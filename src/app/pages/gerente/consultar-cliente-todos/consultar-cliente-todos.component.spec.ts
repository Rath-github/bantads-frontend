import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClienteTodosComponent } from './consultar-cliente-todos.component';

describe('ConsultarClienteTodosComponent', () => {
  let component: ConsultarClienteTodosComponent;
  let fixture: ComponentFixture<ConsultarClienteTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarClienteTodosComponent]
    });
    fixture = TestBed.createComponent(ConsultarClienteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
