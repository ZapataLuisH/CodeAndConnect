import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgParallaxComponent } from './bg-parallax.component';

describe('BgParallaxComponent', () => {
  let component: BgParallaxComponent;
  let fixture: ComponentFixture<BgParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgParallaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
