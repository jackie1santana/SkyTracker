import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneDataComponent } from './plane-data.component';

describe('PlaneDataComponent', () => {
  let component: PlaneDataComponent;
  let fixture: ComponentFixture<PlaneDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaneDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
