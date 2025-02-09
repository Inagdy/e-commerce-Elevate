import { Component, inject } from '@angular/core';

import { LoginComponent } from "../../UI/login/login.component";
import { RegesterComponent } from "../../UI/regester/regester.component";
import { SwitchpagesService } from '../../../services/switchpage/switchpages.service';
import { ForgetpasswordComponent } from "../../UI/forgetpassword/forgetpassword.component";
import { forgetPasswordSteps } from "../../../../features/pages/forgetPasswordSteps/forgetPasswordSteps.component";
import { reusableModal } from "../../UI/reusableModal/reusableModal.component";

@Component({
  selector: 'app-authpagesmodal',
  imports: [LoginComponent, RegesterComponent, forgetPasswordSteps, reusableModal],
  templateUrl: './authpagesmodal.component.html',
  styleUrl: './authpagesmodal.component.scss'
})
export class AuthpagesmodalComponent {


  _swithpages =inject(SwitchpagesService)


  get currentPage():string{
    return this._swithpages.getCurrentPage()
  }
}