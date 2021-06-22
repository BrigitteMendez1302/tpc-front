import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizetrainingComponent } from './organizetraining.component';

describe('OrganizetrainingComponent', () => {
  let component: OrganizetrainingComponent;
  let fixture: ComponentFixture<OrganizetrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizetrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
