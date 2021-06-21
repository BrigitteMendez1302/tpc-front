import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSpecificLessonCommentComponent } from './see-specific-lesson-comment.component';

describe('SeeSpecificLessonCommentComponent', () => {
  let component: SeeSpecificLessonCommentComponent;
  let fixture: ComponentFixture<SeeSpecificLessonCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSpecificLessonCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeSpecificLessonCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
