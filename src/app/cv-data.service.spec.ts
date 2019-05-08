import { TestBed } from '@angular/core/testing';

import { CvDataService } from './cv-data.service';

describe('CvDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvDataService = TestBed.get(CvDataService);
    expect(service).toBeTruthy();
  });
});
