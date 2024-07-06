import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineTrackingComponent } from './marine-tracking.component';

describe('MarineTrackingComponent', () => {
  let component: MarineTrackingComponent;
  let fixture: ComponentFixture<MarineTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarineTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
