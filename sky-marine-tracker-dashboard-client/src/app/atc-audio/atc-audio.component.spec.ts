import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtcAudioComponent } from './atc-audio.component';

describe('AtcAudioComponent', () => {
  let component: AtcAudioComponent;
  let fixture: ComponentFixture<AtcAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtcAudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtcAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
