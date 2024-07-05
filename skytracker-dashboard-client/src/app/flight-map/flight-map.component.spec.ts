import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMapComponent } from './flight-map.component';

describe('FlightMapComponent', () => {
  let component: FlightMapComponent;
  let fixture: ComponentFixture<FlightMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
