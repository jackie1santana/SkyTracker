import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineWeatherComponent } from './marine-weather.component';

describe('MarineWeatherComponent', () => {
  let component: MarineWeatherComponent;
  let fixture: ComponentFixture<MarineWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarineWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
