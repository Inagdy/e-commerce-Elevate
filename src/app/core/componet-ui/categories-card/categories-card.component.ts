import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CircleUiComponent } from "../circle-ui/circle-ui.component";
import { poularproduct } from '../../../shared/interfaces/product/poularproduct';

// import { poularproduct } from '../../../share/interfaces/product/poularproduct';

@Component({
  selector: 'app-categories-card',
  imports: [CircleUiComponent],
  templateUrl: './categories-card.component.html',
  styleUrl: './categories-card.component.scss'
})
export class CategoriesCardComponent {

@Input() products!:poularproduct
@Output()  imagses:EventEmitter<string[]>=new EventEmitter<string[]>()
  constructor() { }


  getallimages(images: string[]) {
    console.log(images);
    this.imagses.emit(images); // Emit the images when clicked
  }

}
