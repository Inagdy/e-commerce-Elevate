
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
// import { CategoriesCardComponent } from "../../componet-ui/categories-card/categories-card.component";
// import { TitleSectionComponent } from "../../componet-ui/title-section/title-section.component";
// import { PoularIteamsCategoiresComponent } from "../../componet-ui/poular-iteams-categoires/poular-iteams-categoires.component";

import { take } from 'rxjs';
import { CategoriesCardComponent } from '../../../core/componet-ui/categories-card/categories-card.component';
import { TitleSectionComponent } from '../../../core/componet-ui/title-section/title-section.component';
import { PoularIteamsCategoiresComponent } from '../../../core/componet-ui/poular-iteams-categoires/poular-iteams-categoires.component';
import { LayerimagespoularitemsComponent } from '../../../shared/components/UI/layerimagespoularitems/layerimagespoularitems.component';
import { ProductService } from '../../../shared/services/product/product.service';
import { CategoryService } from '../../../shared/services/categorys/category.service';
import { poularproduct } from '../../../shared/interfaces/product/poularproduct';
import { Catogoryadapt_i } from '../../../shared/interfaces/catogoryadpat/catogoryadapt';





@Component({
  selector: 'app-poular-iteams',
  imports: [CategoriesCardComponent, TitleSectionComponent, PoularIteamsCategoiresComponent, LayerimagespoularitemsComponent],
  templateUrl: './poular-iteams.component.html',
  styleUrl: './poular-iteams.component.scss'
})
export class PoularIteamsComponent implements OnInit {

constructor(private _ProductService:ProductService,private _categoryService:CategoryService){
}


products: WritableSignal<poularproduct> = signal({ product: [] });
categoryy:WritableSignal<Catogoryadapt_i>=signal([])
layerImages:  WritableSignal< string[]> = signal([]); 
showLayerImages: WritableSignal<boolean> = signal(false); 

toggleLayerImages(images: string[]) {
  this.layerImages.set(images);
  this.showLayerImages.set(true); // Set to true when images are retrieved
}


handleShowEvent(event: boolean) {
  this.showLayerImages.set(event); // Update the showLayerImages signal based on the emitted event
}
ngOnInit(): void {
  this.getallproduct()
  this.getallcategories()
}


getallproduct(kewword:string='') {
  this._ProductService.getAllpoularproduct(kewword).pipe(take(1)).subscribe({
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
getallproductfromcategory(keword: string){
  this.getallproduct(keword)
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
