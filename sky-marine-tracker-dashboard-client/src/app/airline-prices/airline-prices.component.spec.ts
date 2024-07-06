import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinePricesComponent } from './airline-prices.component';

describe('AirlinePricesComponent', () => {
  let component: AirlinePricesComponent;
  let fixture: ComponentFixture<AirlinePricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlinePricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirlinePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
