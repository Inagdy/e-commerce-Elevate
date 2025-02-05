import { Component, EventEmitter, inject, Inject, Output, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthinpustUiComponent } from '../../../../features/componet/authinpust-ui/authinpust-ui.component';
import { Inpust } from '../../../../features/componet/authinpust-ui/interfaces/inpusts/inpust';
import { ModallayerComponent } from '../modallayer/modallayer.component';
import { callAPIService } from '../../../services/CALLAPI/callapi.service';

@Component({
  selector: 'app-login',
  imports: [AuthinpustUiComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  callAPIService = inject(callAPIService);

  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  logininputs: Inpust[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'Email' },
    {
      type: 'password',
      formcontrol: 'password',
      placeholder: 'Password',
    },
  ];

  login(formvalue: any) {
    this.callAPIService.singin(formvalue, this.loginform);
  }
}
