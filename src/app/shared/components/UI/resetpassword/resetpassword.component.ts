import { Component } from '@angular/core';
import { callAPIService } from '../../../services/CALLAPI/callapi.service';
import { inpustInterface } from '../../../../features/componet/authinpust-ui/interfaces/inpusts/inpustInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthinpustUiComponent } from "../../../../features/componet/authinpust-ui/authinpust-ui.component";

@Component({
  selector: 'app-resetpassword',
  imports: [AuthinpustUiComponent],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
  constructor(private _callAPIService: callAPIService) {}



  // inputs for rest password form
  restPasswordInputs: inpustInterface[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'enter yor email' },
    {
      type: 'password',
      formcontrol: 'newPassword',
      placeholder: 'enter yor password',
    },
  ];

  restpasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
  });

  Restpass(formvalue: { email: string; newPassword: string }) {
    this._callAPIService.Restpaswword(formvalue, this.restpasswordForm);
  }
}
