import { Component, Input, OnChanges } from '@angular/core';
import { PasswordService } from '../../services/password.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-rules',
  templateUrl: './password-rules.component.html',
  styleUrl: './password-rules.component.css'
})
export class PasswordRulesComponent implements OnChanges {
  @Input() password: string = '';
  rules: { rule: string, valid: boolean }[] = [];
  isPasswordValid = false;
  validatePassword = false;


  constructor(private fb: FormBuilder, private passwordService: PasswordService) {
    (value:string) => {
      this.isPasswordValid = this.passwordService.validatePassword(value);
    };
  }

  ngOnChanges() {
    this.rules = this.passwordService.checkRules(this.password);
  }
}
