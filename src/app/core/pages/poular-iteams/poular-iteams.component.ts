
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
// import { CategoriesCardComponent } from "../../componet-ui/categories-card/categories-card.component";
// import { TitleSectionComponent } from "../../componet-ui/title-section/title-section.component";
// import { PoularIteamsCategoiresComponent } from "../../componet-ui/poular-iteams-categoires/poular-iteams-categoires.component";

import { take } from 'rxjs';
import { ProductService } from '../../../shared/services/product/product.service';
import { CategoryService } from '../../../shared/services/categorys/category.service';
import { poularproduct } from '../../../shared/interfaces/product/poularproduct';
import { CategoriesCardComponent } from '../../componet-ui/categories-card/categories-card.component';
import { TitleSectionComponent } from '../../componet-ui/title-section/title-section.component';
import { PoularIteamsCategoiresComponent } from '../../componet-ui/poular-iteams-categoires/poular-iteams-categoires.component';




@Component({
  selector: 'app-poular-iteams',
  imports: [CategoriesCardComponent, TitleSectionComponent, PoularIteamsCategoiresComponent],
  templateUrl: './poular-iteams.component.html',
  styleUrl: './poular-iteams.component.scss'
})
export class PoularIteamsComponent implements OnInit {

constructor(private _ProductService:ProductService,private _categoryService:CategoryService){
}


products: WritableSignal<poularproduct> = signal({ product: [] });
categoryy=signal([])


ngOnInit(): void {
  this.getallproduct()
  this.getallcategories()
}


getallproduct(){
  this._ProductService.getAllpoularproduct().pipe(take(1)).subscribe({
    next: (data) => {
      console.log(data);
       this.products.set(data)
       console.log(this.products());
    },
    error: (error) => {
      console.error('There was an error!', error);
    }
  })
}

getallcategories(){
  this._categoryService.getAllgategory().pipe(take(1)).subscribe({
    next: (data) => {
      console.log(data);
       this.categoryy.set(data)
       console.log(this.categoryy());
    },
    error: (error) => {
      console.error('There was an error!', error);
    }
  })
}




  

}
