import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleComponent2 } from './add-schedule.component';

describe('AddScheduleComponent', () => {
  let component: AddScheduleComponent2;
  let fixture: ComponentFixture<AddScheduleComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
