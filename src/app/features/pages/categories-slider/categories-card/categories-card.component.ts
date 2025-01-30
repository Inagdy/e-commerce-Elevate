import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories-card',
  imports: [],
  templateUrl: './categories-card.component.html',
  styleUrl: './categories-card.component.scss'
})
export class categoriesCardComponent  {
  
@Input() mydata!: any;

}
