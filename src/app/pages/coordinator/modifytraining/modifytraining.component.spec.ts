import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifytrainingComponent } from './modifytraining.component';

describe('ModifytrainingComponent', () => {
  let component: ModifytrainingComponent;
  let fixture: ComponentFixture<ModifytrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifytrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifytrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
