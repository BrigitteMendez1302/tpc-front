import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSpecificWorkshipComponent } from './see-specific-reservation.component';

describe('SeeSpecificWorkshipComponent', () => {
  let component: SeeSpecificWorkshipComponent;
  let fixture: ComponentFixture<SeeSpecificWorkshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSpecificWorkshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeSpecificWorkshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
