
import { Component, inject} from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { categoriesCardComponent} from "./categories-card/categories-card.component";
import { CategoryService } from '../../../shared/services/categorys/category.service';
import { category } from '../../../shared/interfaces/category/category';

@Component({
  selector: 'app-gategories-slider',
  imports: [CarouselModule, categoriesCardComponent],
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
  public data!: category[];
  private api: any;
  private _categoryService= inject(CategoryService)



  ngOnInit(): void {
   this.api = this._categoryService.getAllgategory().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
 
  ngOnDestroy() {
    this.api.unsubscribe();
  }

}
