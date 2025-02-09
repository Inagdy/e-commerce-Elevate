import { Component, computed, effect } from '@angular/core';
import { ForgetpasswordComponent } from "../../../shared/components/UI/forgetpassword/forgetpassword.component";
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';
import { VerifycodeComponent } from "../../../shared/components/UI/verifycode/verifycode.component";
import { ResetpasswordComponent } from "../../../shared/components/UI/resetpassword/resetpassword.component";

import { LoginComponent } from "../../../shared/components/UI/login/login.component";

@Component({
  selector: 'app-forgetPasswordSteps',
  imports: [ForgetpasswordComponent, VerifycodeComponent, ResetpasswordComponent, LoginComponent],
  templateUrl: './forgetPasswordSteps.component.html',
  styleUrl: './forgetPasswordSteps.component.scss'
})
export class forgetPasswordSteps {
  steps:any;
  constructor(private _callAPIService: callAPIService) {
    effect(() => {
      this.steps = computed(() => this._callAPIService.step());
    });
  }
}
