import { TestBed } from '@angular/core/testing';

import { ArithmeticserviceService } from './arithmeticservice.service';

describe('ArithmeticserviceService', () => {
  let service: ArithmeticserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
