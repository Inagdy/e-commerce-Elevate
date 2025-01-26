import { Component, input, InputSignal, signal } from '@angular/core';
import { ISpecialGifts } from '../../../../../core/interfaces/special-gifts';
import { ButtonComponent } from "../../button/button.component";
import { CarouselModule , OwlOptions } from 'ngx-owl-carousel-o';
import { IButton } from '../../../../../core/interfaces/button';
@Component({
  selector: 'app-special-gift-slider',
  imports: [ButtonComponent , CarouselModule],
  templateUrl: './special-gift-slider.component.html',
  styleUrl: './special-gift-slider.component.scss'
})
export class SpecialGiftSliderComponent {
  specialGift:InputSignal<ISpecialGifts> = input.required<ISpecialGifts>();
  currentSlide = signal(0);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    center:true,
    dots: true,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items:1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    autoplay:true,
    autoplayTimeout : 3000,
    autoplaySpeed:1000,
    dotsSpeed:1000,
    margin:15,
    navText: [
      '<i class="pi pi-angle-left"></i>',
      '<i class="pi pi-angle-right"></i>'
    ]
  }
  buttonInfo:IButton = {
    buttonName : "shop now",
    background : "#F82BA9",
    showIcon : true,
    borderRadius : 10,
    color : "#fff",
    disabled : false
  }
  setCurrentSlide(index: number): void {
    this.currentSlide.set(index);
  }
  shopNow()
  {
    
  }
}
