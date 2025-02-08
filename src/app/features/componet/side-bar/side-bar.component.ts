import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SideBarCardComponent } from '../../../shared/components/side-bar-card/side-bar-card.component';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarCardComponent ,FormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  public firstcard = [
    'Home & Living',
    'Garment Care',
    'Jewelry & Accessories',
    'Occasion Gifts',
    'Office & Stationery',
    'Personalised Gifts',
    'Gifts Box',
    'Other',
  ];
  secandcard =[
    "Tovola",
    "Sundoy",
    "Sahoo Gifts",
    "Casterly",
    "Mainden Gifts"
  ]
  value!: number ; 
  salescard = ["On Sale", "In Stock" ,"Out Of Stock","Discount"]
  sizes = ["Extra Small","Small","Medium","Large","Extra Large"]
}
