import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveLessonComponent } from './reserve-lesson.component';

describe('ReserveLessonComponent', () => {
  let component: ReserveLessonComponent;
  let fixture: ComponentFixture<ReserveLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
