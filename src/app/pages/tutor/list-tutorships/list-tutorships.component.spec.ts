import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutorshipsComponent } from './list-tutorships.component';

describe('ListTutorshipsComponent', () => {
  let component: ListTutorshipsComponent;
  let fixture: ComponentFixture<ListTutorshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTutorshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTutorshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
