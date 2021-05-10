import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDayMarkerComponent } from './week-day-marker.component';

describe('WeekDayMarkerComponent', () => {
  let component: WeekDayMarkerComponent;
  let fixture: ComponentFixture<WeekDayMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekDayMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDayMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
