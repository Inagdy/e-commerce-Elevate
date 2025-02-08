import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { Allcatogory } from '../../../shared/interfaces/allcatogory/allcatogory';
import { CommonModule } from '@angular/common';
import { AllProductsRes } from '../../../shared/interfaces/allproduct/allproduct';
import { ProductItemComponent } from "../../../core/componet-ui/product-item/product-item.component";
import { PaginationComponent } from "../../../shared/components/UI/pagination/pagination.component";

@Component({
  selector: 'app-categories',
  imports: [CommonModule, ProductItemComponent, PaginationComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  productService = inject(ProductService);
  productsData = signal<AllProductsRes>({} as AllProductsRes);
  numberOfPages = signal<number>(0);
  ngOnInit()
  {
    this.getAllProducts(1);
  }
  getAllProducts(pageNumber:number , limit:number = 5)
  {
    this.productService.getAllproducts(pageNumber , limit).subscribe({
      next : (res:AllProductsRes) => {
        this.numberOfPages.set(res.metadata.totalPages);
        this.productsData.set(res);
      }
    })
  }
  getCurrentPage(page:number)
  {
    this.getAllProducts(page);
  }
}
