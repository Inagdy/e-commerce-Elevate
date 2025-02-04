import { Component, computed, effect } from '@angular/core';
import { ForgetpasswordComponent } from "../../../shared/components/UI/forgetpassword/forgetpassword.component";
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';
import { VerifycodeComponent } from "../../../shared/components/UI/verifycode/verifycode.component";
import { ResetpasswordComponent } from "../../../shared/components/UI/resetpassword/resetpassword.component";
import { LoginpageComponent } from "../loginpage/loginpage.component";

@Component({
  selector: 'app-forgetpasswordpage',
  imports: [ForgetpasswordComponent, VerifycodeComponent, ResetpasswordComponent, LoginpageComponent],
  templateUrl: './forgetpasswordpage.component.html',
  styleUrl: './forgetpasswordpage.component.scss'
})
export class ForgetpasswordpageComponent {
  steps:any;
  constructor(private _callAPIService: callAPIService) {
    effect(() => {
      this.steps = computed(() => this._callAPIService.step());
    });
  }
}
