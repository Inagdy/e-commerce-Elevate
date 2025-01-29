import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-gategories-card',
  imports: [],
  templateUrl: './categories-card.component.html',
  styleUrl: './categories-card.component.scss'
})
export class categoriesCardComponent  {
  
@Input() mydata!: any;

}
