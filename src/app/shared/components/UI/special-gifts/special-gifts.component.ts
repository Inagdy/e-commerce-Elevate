import { Component, signal } from '@angular/core';
import { ISpecialGifts } from '../../../../core/interfaces/special-gifts';
import { specialGifts } from '../../Bussines/special-gifts';
import { SpecialGiftComponent } from "./special-gift/special-gift.component";
import { SpecialGiftSliderComponent } from './special-gift-slider/special-gift-slider.component';

@Component({
  selector: 'app-special-gifts',
  imports: [SpecialGiftComponent, SpecialGiftSliderComponent],
  templateUrl: './special-gifts.component.html',
  styleUrl: './special-gifts.component.scss'
})
export class SpecialGiftsComponent {
  // specialGifts:ISpecialGifts[] = specialGifts;
  specialGifts = signal<ISpecialGifts[]>([]);
  lastSpecialGifts = signal<ISpecialGifts[]>([]);
  ngOnInit()
  {
    this.specialGifts.set(JSON.parse(JSON.stringify(specialGifts)));
    this.lastSpecialGifts.set(JSON.parse(JSON.stringify(specialGifts.slice(-3))));
    console.log(this.lastSpecialGifts());
  }
}
