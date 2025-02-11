import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SideBarCardComponent } from '../../../shared/components/side-bar-card/side-bar-card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarCardComponent ,FormsModule ,NgClass,ReactiveFormsModule ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {

  form = new FormGroup({
    i: new FormControl(null),
  })

  firstcard = [
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
  star = Array(5);
  star_number:number = 4;
  
  public cards={
    firstcard: this.firstcard,
    secandcard: this.secandcard,
    salescard: this.salescard,
    sizes: this.sizes,
    star: this.star,
    star_number: this.star
  }
  getCheckedObjects() {
    console.log(this.form.value); 

  }
}
