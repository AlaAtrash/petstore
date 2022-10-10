import { TestBed } from '@angular/core/testing';

import { BuyServiceService } from './buy-service.service';

describe('BuyServiceService', () => {
  let service: BuyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
