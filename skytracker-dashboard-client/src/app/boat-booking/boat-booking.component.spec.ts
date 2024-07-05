import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatBookingComponent } from './boat-booking.component';

describe('BoatBookingComponent', () => {
  let component: BoatBookingComponent;
  let fixture: ComponentFixture<BoatBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoatBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
