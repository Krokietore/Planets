import { TestBed } from '@angular/core/testing';

import { PlanetsService } from './planets.service';

describe('PlanetsServiceService', () => {
  let service: PlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
