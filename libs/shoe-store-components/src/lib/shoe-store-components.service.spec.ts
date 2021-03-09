import { TestBed } from '@angular/core/testing';

import { ShoeStoreComponentsService } from './shoe-store-components.service';

describe('ShoeStoreComponentsService', () => {
  let service: ShoeStoreComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeStoreComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
