import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavStudentComponent } from './main-nav-student.component';

describe('MainNavStudentComponent', () => {
  let component: MainNavStudentComponent;
  let fixture: ComponentFixture<MainNavStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
