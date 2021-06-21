import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkshopsStudentComponent } from './list-workshops-student.component';

describe('ListWorkshopsStudentComponent', () => {
  let component: ListWorkshopsStudentComponent;
  let fixture: ComponentFixture<ListWorkshopsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWorkshopsStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkshopsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
