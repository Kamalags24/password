import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAnimationComponent } from './success-animation.component';

describe('SuccessAnimationComponent', () => {
  let component: SuccessAnimationComponent;
  let fixture: ComponentFixture<SuccessAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
