import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavCoordinatorComponent } from './main-nav-coordinator.component';

describe('MainNavCoordinatorComponent', () => {
  let component: MainNavCoordinatorComponent;
  let fixture: ComponentFixture<MainNavCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
