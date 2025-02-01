import { Component } from '@angular/core';
import { ReviewsComponent } from "../../../shared/components/UI/reviews/reviews.component";
@Component({
  selector: 'app-home',
  imports: [ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){}
}
