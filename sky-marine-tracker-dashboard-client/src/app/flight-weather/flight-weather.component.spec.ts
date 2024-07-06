import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightWeatherComponent } from './flight-weather.component';

describe('FlightWeatherComponent', () => {
  let component: FlightWeatherComponent;
  let fixture: ComponentFixture<FlightWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
