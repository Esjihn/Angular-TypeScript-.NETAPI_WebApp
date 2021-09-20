import { TestBed } from '@angular/core/testing';

import { AutoWarehouseServiceService } from './auto-warehouse-service.service';

describe('AutoWarehouseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoWarehouseServiceService = TestBed.get(AutoWarehouseServiceService);
    expect(service).toBeTruthy();
  });
});
