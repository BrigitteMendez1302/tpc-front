import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeLessonCommentsComponent } from './see-lesson-comments.component';

describe('SeeLessonCommentsComponent', () => {
  let component: SeeLessonCommentsComponent;
  let fixture: ComponentFixture<SeeLessonCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeLessonCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeLessonCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
