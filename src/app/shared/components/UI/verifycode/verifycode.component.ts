import { Component } from '@angular/core';
import { AuthinpustUiComponent } from "../../../../features/componet/authinpust-ui/authinpust-ui.component";
import { callAPIService } from '../../../services/CALLAPI/callapi.service';
import { Inpust } from '../../../../features/componet/authinpust-ui/interfaces/inpusts/inpust';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verifycode',
  imports: [AuthinpustUiComponent],
  templateUrl: './verifycode.component.html',
  styleUrl: './verifycode.component.scss'
})
export class VerifycodeComponent {
  constructor(private _callAPIService: callAPIService) {}

  inputs: Inpust[] = [
    {
      type: 'number',
      formcontrol: 'resetCode',
      placeholder: 'enter yor valid number',
    },
  ];

  ResetCode: FormGroup= new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  verifyode(formvalu: { resetCode: string }) {
    this._callAPIService.VerifyResetCode(formvalu, this.ResetCode);
  }
}
