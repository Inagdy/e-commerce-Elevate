import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModallayerComponent } from '../../../shared/components/UI/modallayer/modallayer.component';
import { LoginComponent } from '../../../shared/components/UI/login/login.component';
import { RegesterComponent } from '../../../shared/components/UI/regester/regester.component';
import { AuthpagesmodalComponent } from "../../../shared/components/bussienss/authpagesmodal/authpagesmodal.component";
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    AuthpagesmodalComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuBar: boolean = false;
__callAPIService=inject(callAPIService)


  menuClick() {
    this.menuBar = !this.menuBar;
  }

   showLoging() {
     this.__callAPIService.showloginpage.set(true);
   }
}
