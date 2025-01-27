
import { Component} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { GategoriesCardComponent } from "./gategories-card/gategories-card.component";
import { CategoryService } from '../../../shared/services/categorys/category.service';
import { Gategory } from '../../../shared/interfaces/gategory/gategory';

@Component({
  selector: 'app-gategories-slider',
  imports: [CarouselModule, GategoriesCardComponent],
  templateUrl: './gategories-slider.component.html',
  styleUrl: './gategories-slider.component.scss'
})
export class GategoriesSliderComponent {
  slidersettings: OwlOptions = {
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  public data!: Gategory[];
  constructor( private _categoryService:CategoryService) {}

  ngOnInit(): void {
    this._categoryService.getAllgategory().subscribe(data => {
      this.data = data;
    });
  }
 


}
