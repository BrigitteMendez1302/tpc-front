import { TestBed } from '@angular/core/testing';

import { LessonApiBriService } from './lesson-api-bri.service';

describe('LessonApiBriService', () => {
  let service: LessonApiBriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonApiBriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
