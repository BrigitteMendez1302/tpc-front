import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTutorialComponent } from './reserve-tutorial.component';

describe('ReserveTutorialComponent', () => {
  let component: ReserveTutorialComponent;
  let fixture: ComponentFixture<ReserveTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
