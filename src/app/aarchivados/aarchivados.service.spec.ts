import { TestBed } from '@angular/core/testing';

import { AarchivadosService } from './aarchivados.service';

describe('AarchivadosService', () => {
  let service: AarchivadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AarchivadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
