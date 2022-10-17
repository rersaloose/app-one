import { TestBed } from '@angular/core/testing';

import { SlidService } from './slid.service';

describe('SlidService', () => {
  let service: SlidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
