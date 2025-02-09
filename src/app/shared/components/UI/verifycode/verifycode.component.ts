import { Component } from '@angular/core';
import { AuthinpustUiComponent } from "../../../../features/componet/authinpust-ui/authinpust-ui.component";
import { callAPIService } from '../../../services/CALLAPI/callapi.service';
import { inpustInterface } from '../../../../features/componet/authinpust-ui/interfaces/inpusts/inpustInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verifycode',
  imports: [AuthinpustUiComponent],
  templateUrl: './verifycode.component.html',
  styleUrl: './verifycode.component.scss'
})
export class VerifycodeComponent {
  constructor(private _callAPIService: callAPIService) {}

  verifyCodeInputs: inpustInterface[] = [
    {
      type: 'number',
      formcontrol: 'resetCode',
      placeholder: 'enter yor valid number',
    },

  ];

  verifyCodeForm: FormGroup= new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  VerifyCode(formvalu: { resetCode: string }) {
    this._callAPIService.VerifyResetCode(formvalu, this.verifyCodeForm);
  }
}
