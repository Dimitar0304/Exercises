import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangePasswordForm } from './change-password-form/change-password-form';

@Component({
  selector: 'app-root',
  imports: [ChangePasswordForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('change-password-form');
}
