import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRulesComponent } from './password-rules.component';

describe('PasswordRulesComponent', () => {
  let component: PasswordRulesComponent;
  let fixture: ComponentFixture<PasswordRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
