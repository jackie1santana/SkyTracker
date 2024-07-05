import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatTrackingComponent } from './boat-tracking.component';

describe('BoatTrackingComponent', () => {
  let component: BoatTrackingComponent;
  let fixture: ComponentFixture<BoatTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoatTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoatTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
