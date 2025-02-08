import { Component, input, InputSignal, signal } from '@angular/core';
import { allProduct } from '../../../shared/interfaces/allproduct/allproduct';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  product:InputSignal<allProduct> = input.required<allProduct>();
  displayImagePreview = signal<boolean>(false)
  showImagePreview()
  {
    this.displayImagePreview.set(true);
  }
  closeImagePreview()
  {
    this.displayImagePreview.set(false);
  }
}
