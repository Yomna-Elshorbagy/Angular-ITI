import { TestBed } from '@angular/core/testing';

import { InsertproductsService } from './insertproducts.service';

describe('InsertproductsService', () => {
  let service: InsertproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
