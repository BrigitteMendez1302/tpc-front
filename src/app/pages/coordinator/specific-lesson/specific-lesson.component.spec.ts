import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificLessonComponent } from './specific-lesson.component';

describe('SpecificLessonComponent', () => {
  let component: SpecificLessonComponent;
  let fixture: ComponentFixture<SpecificLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
