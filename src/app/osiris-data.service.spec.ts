import { TestBed, inject } from '@angular/core/testing';

import { OsirisDataService } from './osiris-data.service';

describe('OsirisDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsirisDataService]
    });
  });

  it('should be created', inject([OsirisDataService], (service: OsirisDataService) => {
    expect(service).toBeTruthy();
  }));
});
