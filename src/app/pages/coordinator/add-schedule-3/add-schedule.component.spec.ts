import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleComponent3 } from './add-schedule.component';

describe('AddScheduleComponent', () => {
  let component: AddScheduleComponent3;
  let fixture: ComponentFixture<AddScheduleComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleComponent3 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
