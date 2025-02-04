import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inpust } from '../../../../features/componet/authinpust-ui/interfaces/inpusts/inpust';
import { callAPIService } from './../../../services/CALLAPI/callapi.service';
import { Component } from '@angular/core';
import { Forgetpassform } from '../../../interfaces/auth/forgetpass';
import { AuthinpustUiComponent } from "../../../../features/componet/authinpust-ui/authinpust-ui.component";

@Component({
  selector: 'app-forgetpassword',
  imports: [AuthinpustUiComponent],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  constructor(private _callAPIService: callAPIService) {}

  forgetPassInputs: Inpust[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'enter yor email' },
  ];

  forgetpass: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  ForgetPass(formvalu:Forgetpassform) {
    console.log(this.forgetpass.value);
    this._callAPIService.forgetpassword(formvalu, this.forgetpass);
  }
}
