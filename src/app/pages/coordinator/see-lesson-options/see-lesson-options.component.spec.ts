import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeLessonOptionsComponent } from './see-lesson-options.component';

describe('SeeLessonOptionsComponent', () => {
  let component: SeeLessonOptionsComponent;
  let fixture: ComponentFixture<SeeLessonOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeLessonOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeLessonOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
