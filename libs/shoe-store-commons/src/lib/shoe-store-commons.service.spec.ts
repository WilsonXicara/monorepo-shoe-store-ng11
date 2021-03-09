import { TestBed } from '@angular/core/testing';

import { ShoeStoreCommonsService } from './shoe-store-commons.service';

describe('ShoeStoreCommonsService', () => {
  let service: ShoeStoreCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeStoreCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
