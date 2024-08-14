import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private rules = [
    { rule: 'Au moins 8 caractères', test: (password: string) => password.length >= 8 },
    { rule: 'Au moins une majuscule', test: (password: string) => /[A-Z]/.test(password) },
    { rule: 'Au moins une minuscule', test: (password: string) => /[a-z]/.test(password) },
    { rule: 'Au moins un chiffre', test: (password: string) => /\d/.test(password) },
    { rule: 'Au moins un caractère spécial', test: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  validatePassword(password: string): boolean {
    return this.rules.every(rule => rule.test(password));
  }

  

  checkRules(password: string) {
    return this.rules.map(rule => ({
      rule: rule.rule,
      valid: rule.test(password)
    }));
  }

  savePassword(password: string) {
    localStorage.setItem('password', password);
  }
}
