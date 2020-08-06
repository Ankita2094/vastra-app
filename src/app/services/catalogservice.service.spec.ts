import { TestBed } from '@angular/core/testing';

import { CatalogserviceService } from './catalogservice.service';

describe('CatalogserviceService', () => {
  let service: CatalogserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
