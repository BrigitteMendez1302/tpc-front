import { TestBed } from '@angular/core/testing';

import { LessonStudentsApiBriService } from './lesson-students-api-bri.service';

describe('LessonStudentsApiBriService', () => {
  let service: LessonStudentsApiBriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonStudentsApiBriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
