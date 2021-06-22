import { TestBed } from '@angular/core/testing';

import { TrainingTutorService } from './training-tutor.service';

describe('TrainingTutorService', () => {
  let service: TrainingTutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingTutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
