import { Component, inject } from '@angular/core';
import { ModallayerComponent } from "../../UI/modallayer/modallayer.component";
import { LoginComponent } from "../../UI/login/login.component";
import { RegesterComponent } from "../../UI/regester/regester.component";
import { SwitchpagesService } from '../../../services/switchpage/switchpages.service';
import { ForgetpasswordComponent } from "../../UI/forgetpassword/forgetpassword.component";
import { ForgetpasswordpageComponent } from "../../../../features/pages/forgetpasswordpage/forgetpasswordpage.component";

@Component({
  selector: 'app-authpagesmodal',
  imports: [ModallayerComponent, LoginComponent, RegesterComponent, ForgetpasswordpageComponent],
  templateUrl: './authpagesmodal.component.html',
  styleUrl: './authpagesmodal.component.scss'
})
export class AuthpagesmodalComponent {


  _swithpages =inject(SwitchpagesService)


  get currentPage():string{
    return this._swithpages.getCurrentPage()
  }
}