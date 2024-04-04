import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClienteMelhoresComponent } from './consultar-cliente-melhores.component';

describe('ConsultarClienteMelhoresComponent', () => {
  let component: ConsultarClienteMelhoresComponent;
  let fixture: ComponentFixture<ConsultarClienteMelhoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarClienteMelhoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarClienteMelhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
