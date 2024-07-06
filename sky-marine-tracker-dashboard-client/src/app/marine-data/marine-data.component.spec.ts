import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineDataComponent } from './marine-data.component';

describe('MarineDataComponent', () => {
  let component: MarineDataComponent;
  let fixture: ComponentFixture<MarineDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
