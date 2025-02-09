import { Router } from '@angular/router';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { callAPIService } from '../CALLAPI/callapi.service';

@Injectable({
  providedIn: 'root',
})
export class SwitchpagesService {
  constructor() {}

  pages: WritableSignal<string> = signal('login');
  _callservise = inject(callAPIService);
  rout = inject(Router);

  switchToLogin() {
    if (this._callservise.showloginpage()) {
      this.pages.set('login');
    } else {
      this.rout.navigate(['/login']);
    }
  }

  switchToRegister() {
    if (this._callservise.showloginpage()) {
      this.pages.set('register');
    } else {
      this.rout.navigate(['/regester']);
    }
  }
  switchToForgetpass() {
    if (this._callservise.showloginpage()) {
      this.pages.set('forgetPassword');
    } else {
      this.rout.navigate(['/forgetpassword']);
    }
  }

  getCurrentPage(): string {
    return this.pages();
  }
}
