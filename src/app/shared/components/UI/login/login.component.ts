import { Component,inject,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthinpustUiComponent } from '../../../../features/componet/authinpust-ui/authinpust-ui.component';
import { inpustInterface } from '../../../../features/componet/authinpust-ui/interfaces/inpusts/inpustInterface';
import { callAPIService } from '../../../services/CALLAPI/callapi.service';

@Component({
  selector: 'app-login',
  imports: [AuthinpustUiComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  callAPIService = inject(callAPIService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  loginInputs: inpustInterface[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'Email' },
    {
      type: 'password',
      formcontrol: 'password',
      placeholder: 'Password',
    },
  ];

  login(formvalue: any) {
    this.callAPIService.singin(formvalue, this.loginForm);
  }
}
