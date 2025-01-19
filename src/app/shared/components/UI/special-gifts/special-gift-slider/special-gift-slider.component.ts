import { Component, input, InputSignal, signal } from '@angular/core';
import { ISpecialGifts } from '../../../../../core/interfaces/special-gifts';
import { ButtonComponent } from "../../button/button.component";
@Component({
  selector: 'app-special-gift-slider',
  imports: [ButtonComponent],
  templateUrl: './special-gift-slider.component.html',
  styleUrl: './special-gift-slider.component.scss'
})
export class SpecialGiftSliderComponent {
  specialGift:InputSignal<ISpecialGifts> = input.required<ISpecialGifts>();
  currentSlide = signal(0);
  setCurrentSlide(index: number): void {
    this.currentSlide.set(index);
  }
  shopNow()
  {
    
  }
}
