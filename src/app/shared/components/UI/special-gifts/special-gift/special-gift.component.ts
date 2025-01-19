import { Component, input, InputSignal } from '@angular/core';
import { ISpecialGifts } from '../../../../../core/interfaces/special-gifts';
import { ButtonComponent } from "../../button/button.component";
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-special-gift',
  imports: [ButtonComponent , NgStyle],
  templateUrl: './special-gift.component.html',
  styleUrl: './special-gift.component.scss'
})
export class SpecialGiftComponent {
  specialGift:InputSignal<ISpecialGifts> = input.required<ISpecialGifts>();
  imageMaxHeight:InputSignal<string> = input<string>("");
  reverse:InputSignal<boolean> = input<boolean>(false);
  shopNow()
  {
    console.log('test');
  }
}
