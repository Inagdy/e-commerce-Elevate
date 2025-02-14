import {
  inject,
  Injectable,
  OnChanges,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MAuthapiService } from '../lib/m-authapi.service';

import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { SingupForm } from '../../interfaces/auth/singup-form';
import { Loginform } from '../../interfaces/auth/loginform';
import { Forgetpassform } from '../../interfaces/auth/forgetpass';

@Injectable({
  providedIn: 'root',
})
export class callAPIService {
  constructor(
    private _mAuthapiService: MAuthapiService,
    private _: HttpClient
  ) {}

  isAuthenticated: WritableSignal<boolean> = signal(false);

  // inject rout to go pages
  rout = inject(Router);
  // this value to show looding button
  looding: WritableSignal<boolean> = signal(false);
  // this value to disable button
  callapi: WritableSignal<boolean> = signal(false);
  // to show error api
  errormassege: WritableSignal<string> = signal('');
  // steps
  step: WritableSignal<number> = signal(1);

  showloginpage: WritableSignal<boolean> = signal(false);

  // Method to close the login modal
  closeLoginModal() {
    this.showloginpage.set(false);
  }

  singup(form: SingupForm, singUp: FormGroup) {
    if (singUp.valid) {
      this.looding.set(true);
      this.callapi.set(true);
      // call api
      this._mAuthapiService.regester(form).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res);
          this.errormassege.set('');
          this.looding.set(false);
          this.callapi.set(false);
          this.rout.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
          this.looding.set(false);
          this.callapi.set(false);
          console.log('AdabtERROR', err);
          this.errormassege.set(err.error);
        },
      });
    } else {
      singUp.markAllAsTouched();
    }
  }
  
  singin(form: Loginform, singUp: FormGroup) {
    if (singUp.valid) {
      this.looding.set(true);
      this.callapi.set(true);
      this._mAuthapiService.login(form).pipe(take(1)).subscribe({
        next: (res) => {
          if ('token' in res) {
            console.log(res);
            this.isAuthenticated.set(true);
            localStorage.setItem('token', res.token!);
            this.errormassege.set('');
            this.looding.set(false);
            this.callapi.set(false);
            this.rout.navigate(['/home']);

            this.closeLoginModal();
            return;
         
          }
        },
        error: (err) => {
          this.looding.set(false);
          this.callapi.set(false);
          console.log('AdabtERROR', err);
           this.errormassege.set(err.error);
        },
      });
    } else {
      singUp.markAllAsTouched();
    }
  }
  
  forgetpassword(formvalu: Forgetpassform, form: FormGroup) {
    if (form.valid) {
      this.looding.set(true);
      this.callapi.set(true);
      this._mAuthapiService.forgetpass(formvalu).pipe(take(1)).subscribe({
        next: (res) => {
          this.errormassege.set('');
          this.step.set(2)
          this.looding.set(false);
          this.callapi.set(false);
        
          console.log(res);
        },
        error: (err) => {
          console.log(err);
          this.looding.set(false);
          this.callapi.set(false);
          this.errormassege.set(err.error);
        },
      });
    } else {
      console.log('err');
    }
  }
  
  VerifyResetCode(formvalu: { resetCode: string }, form: FormGroup) {
    if (form.valid) {
      this.looding.set(true);
      this.callapi.set(true);
      this._mAuthapiService.resetCodeapi(formvalu).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res);
          this.errormassege.set('');
          this.step.set(3)
          this.looding.set(false);
          this.callapi.set(false);
    
        },
        error: (err) => {
          console.log(err);
          this.looding.set(false);
          this.callapi.set(false);
          this.errormassege.set(err.error);
        },
      });
    } else {
      console.log('err');
    }
  }
  Restpaswword(formvalu: { email: string; newPassword: string }, form: FormGroup) {
    if (form.valid) {
      this.looding.set(true);
      this.callapi.set(true);
      this._mAuthapiService.ResetPassworde(formvalu).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res);
          this.errormassege.set('');
          this.looding.set(false);
          this.step.set(4)
          this.callapi.set(false);
        },
        error: (err) => {
          console.log(err);
          this.looding.set(false);
          this.callapi.set(false);
          this.errormassege.set(err.error);
        },
      });
    } else {
      console.log('err');
    }
  }

  logout() {
    this.isAuthenticated.set(false);
    localStorage.removeItem('token');
    this.rout.navigate(['/auth/login']);
  }

  userInfo() {
    return this._mAuthapiService.userInfo();
  }
}
