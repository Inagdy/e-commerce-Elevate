import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { inpustInterface } from './interfaces/inpusts/inpustInterface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrocomponetsComponent } from "./componet/errocomponets/errocomponets.component";
import { TextauthComponent } from "./componet/textauth/textauth.component";
import { BottonComponent } from "../../../shared/components/button/button.component";
import { ButtonauthComponent } from "./componet/buttonauth/buttonauth.component";
import { ErrapiComponent } from "./componet/errorapi/errapi/errapi.component";
import { SwitchpagesService } from '../../../shared/services/switchpage/switchpages.service';

@Component({
  selector: 'app-authinpust-ui',
  imports: [ReactiveFormsModule, ErrocomponetsComponent, TextauthComponent, ButtonauthComponent, ErrapiComponent ],
  templateUrl: './authinpust-ui.component.html',
  styleUrl: './authinpust-ui.component.scss'
})
export class AuthinpustUiComponent {
  @Output() inputvalu = new EventEmitter<any>();
  // This value receives the input type
  @Input() inputs!: inpustInterface[];
  // This value receives formgroup
  @Input() form!: FormGroup;
  // This value receives headbagesname
  @Input() headPages!: string;

  // p
  @Input() buttonvalue!: string;
  @Input() page!: string;


  _switchpages = inject(SwitchpagesService)

  // to sent data out to parent componet
  outputinput() {
    this.inputvalu.emit(this.form.value);
  }

 
  // to show border red when inputs errors
  isInvalidAndTouched(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched;
  }

  switchToRegister() {
    this._switchpages.switchToRegister();
  }

  switchToLogin() {
    this._switchpages.switchToLogin();
  }
  switchToFogetPass() {
    this._switchpages.switchToForgetpass();
  }


}
