
import { Component} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../../shared/services/categorys/category.service';
import { Gategory } from '../../../shared/interfaces/gategory/gategory';
import { categoriesCardComponent } from './categories-card/categories-card.component';
import { SideBarComponent } from "../../componet/side-bar/side-bar.component";

@Component({
  selector: 'app-categories-slider',
  imports: [CarouselModule, categoriesCardComponent, SideBarComponent],
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.scss'
})
export class categoriesSliderComponent {
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
