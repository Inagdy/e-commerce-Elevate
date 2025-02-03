import { Component, computed, effect, Input } from '@angular/core';
import { callAPIService } from '../../../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-buttonauth',
  imports: [],
  templateUrl: './buttonauth.component.html',
  styleUrl: './buttonauth.component.scss'
})
export class ButtonauthComponent {

  looding: () => boolean = () => false;
  calapi: () => boolean = () => false;
  @Input() Adisabled!: boolean ;

  constructor(private _callAPIService: callAPIService) {
    effect(() => {
      this.looding = computed(() => this._callAPIService.looding());
      this.calapi = computed(() => this._callAPIService.callapi());
    });
  }


@Input() textButton!:string
}
