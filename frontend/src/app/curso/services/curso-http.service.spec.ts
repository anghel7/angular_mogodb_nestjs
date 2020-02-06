import { TestBed } from '@angular/core/testing';

import { CursoHttpService } from './curso-http.service';

describe('CursoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoHttpService = TestBed.get(CursoHttpService);
    expect(service).toBeTruthy();
  });
});
