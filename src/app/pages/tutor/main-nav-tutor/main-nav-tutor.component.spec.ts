import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavTutorComponent } from './main-nav-tutor.component';

describe('MainNavTutorComponent', () => {
  let component: MainNavTutorComponent;
  let fixture: ComponentFixture<MainNavTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
