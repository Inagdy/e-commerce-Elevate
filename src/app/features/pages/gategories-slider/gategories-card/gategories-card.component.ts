import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gategories-card',
  imports: [],
  templateUrl: './gategories-card.component.html',
  styleUrl: './gategories-card.component.scss'
})
export class GategoriesCardComponent  {
  
@Input() mydata!: any;

}
