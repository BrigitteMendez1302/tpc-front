import { TestBed } from '@angular/core/testing';

import { TutorAveragesService } from './tutor-averages.service';

describe('TutorAveragesService', () => {
  let service: TutorAveragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorAveragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
