import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuggestionsComponent } from './show-suggestions.component';

describe('ShowSuggestionsComponent', () => {
  let component: ShowSuggestionsComponent;
  let fixture: ComponentFixture<ShowSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
