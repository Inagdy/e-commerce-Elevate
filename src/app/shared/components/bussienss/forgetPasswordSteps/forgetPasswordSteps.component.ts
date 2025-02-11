import { Component, computed, effect } from '@angular/core';
import { ForgetpasswordComponent } from '../../UI/forgetpassword/forgetpassword.component';
import { VerifycodeComponent } from '../../UI/verifycode/verifycode.component';
import { ResetpasswordComponent } from '../../UI/resetpassword/resetpassword.component';
import { LoginComponent } from '../../UI/login/login.component';
import { callAPIService } from '../../../services/CALLAPI/callapi.service';


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
