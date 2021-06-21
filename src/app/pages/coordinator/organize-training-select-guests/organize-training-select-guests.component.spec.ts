import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeTrainingSelectGuestsComponent } from './organize-training-select-guests.component';

describe('OrganizeTrainingSelectGuestsComponent', () => {
  let component: OrganizeTrainingSelectGuestsComponent;
  let fixture: ComponentFixture<OrganizeTrainingSelectGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizeTrainingSelectGuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeTrainingSelectGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
