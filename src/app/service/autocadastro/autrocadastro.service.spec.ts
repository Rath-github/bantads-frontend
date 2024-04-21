import { TestBed } from '@angular/core/testing';

import { AutrocadastroService } from './autrocadastro.service';

describe('AutrocadastroService', () => {
  let service: AutrocadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutrocadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
