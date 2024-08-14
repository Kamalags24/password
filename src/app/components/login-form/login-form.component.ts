import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  isPasswordValid = false;
  showSuccessAnimation = false;

  constructor(private fb: FormBuilder, private passwordService: PasswordService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.get('password')?.valueChanges.subscribe(value => {
      this.isPasswordValid = this.passwordService.validatePassword(value);
    });
  }

  onSubmit() {
    if (this.loginForm.valid && this.isPasswordValid) {
      const password = this.loginForm.get('password')?.value;
      this.passwordService.savePassword(password);
      this.showSuccessAnimation = true;
      setTimeout(() => this.showSuccessAnimation = false, 3000); // Masquer l'animation après 3 secondes
    }
    }
  }

