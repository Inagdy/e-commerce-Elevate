import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inpust } from './interfaces/inpusts/inpust';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrocomponetsComponent } from "./componet/errocomponets/errocomponets.component";
import { TextauthComponent } from "./componet/textauth/textauth.component";
import { BottonComponent } from "../../../shared/components/button/button.component";
import { ButtonauthComponent } from "./componet/buttonauth/buttonauth.component";
import { ErrapiComponent } from "./componet/errorapi/errapi/errapi.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authinpust-ui',
  imports: [ReactiveFormsModule, ErrocomponetsComponent, TextauthComponent, ButtonauthComponent, ErrapiComponent ,RouterLink],
  templateUrl: './authinpust-ui.component.html',
  styleUrl: './authinpust-ui.component.scss'
})
export class AuthinpustUiComponent {
  @Output() inputvalu = new EventEmitter<any>();
  // This value receives the input type
  @Input() Input!: Inpust[];
  // This value receives formgroup
  @Input() form!: FormGroup;
  // This value receives headbagesname
  @Input() headbages!: string;

  // 
  @Input() buttonvalue!: string;
  @Input() Bage!: string;


  // to sent data out to parent componet
  outputinput() {
    this.inputvalu.emit(this.form.value);
  }

 
  // to show border red when inputs errors
  isInvalidAndTouched(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched;
  }
}
