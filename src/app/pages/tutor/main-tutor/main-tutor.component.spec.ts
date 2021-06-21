import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTutorComponent } from './main-tutor.component';

describe('MainTutorComponent', () => {
  let component: MainTutorComponent;
  let fixture: ComponentFixture<MainTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
