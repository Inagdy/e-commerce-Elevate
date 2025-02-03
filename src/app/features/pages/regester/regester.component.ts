import { Component, inject } from '@angular/core';
import { ModallayerComponent } from '../../../shared/components/UI/modallayer/modallayer.component';
import { AuthinpustUiComponent } from '../../componet/authinpust-ui/authinpust-ui.component';
import { Inpust } from '../../componet/authinpust-ui/interfaces/inpusts/inpust';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { callAPIService } from '../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-regester',
  imports: [ModallayerComponent, AuthinpustUiComponent],
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.scss',
})
export class RegesterComponent {
  _callAPIService = inject(callAPIService);

  singupinputs: Inpust[] = [
    {
      type: 'firstName',
      formcontrol: 'firstName',
      placeholder: 'enter yor firstName',
    },
    {
      type: 'lastName',
      formcontrol: 'lastName',
      placeholder: 'enter yor lastName',
    },
    {
      type: 'email',
      formcontrol: 'email',
      placeholder: 'enter yor email',
    },
    {
      type: 'password',
      formcontrol: 'password',
      placeholder: 'enter yor password',
    },
    {
      type: 'password',
      formcontrol: 'rePassword',
      placeholder: 'enter yor rePassword',
    },
    {
      type: 'phone',
      formcontrol: 'phone',
      placeholder: 'enter yor phone',
    },
    {
      type: 'text',
      formcontrol: 'gender',
      placeholder: 'enter yor gender',
    },
  ];

  singUp: FormGroup = new FormGroup(
    {
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\+20[1][0-9]{9}$/), // Adjusted regex for +20 country code
      ]),
      gender: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(5),
      ]),
    },
    this.confirmPass
  );
  // to cheack password and repasword are same
  confirmPass(repss: any) {
    if (repss.get('password').value === repss.get('rePassword').value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  singup(formvalue: any) {
    this._callAPIService.singup(formvalue, this.singUp);
  }
}
