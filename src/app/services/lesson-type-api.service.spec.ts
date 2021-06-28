import { TestBed } from '@angular/core/testing';

import { LessonTypeApiService } from './lesson-type-api.service';

describe('LessonTypeApiService', () => {
  let service: LessonTypeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonTypeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
