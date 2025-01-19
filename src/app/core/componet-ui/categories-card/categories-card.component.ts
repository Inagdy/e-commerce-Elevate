import { Component, input, Input } from '@angular/core';
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

  constructor() { }

}
