import { Component, input, InputSignal } from '@angular/core';
import { IReview } from '../../../../../core/interfaces/review';
import { HomeComponent } from "../../../../../core/pages/home/home.component";
import { RatingComponent } from "../../rating/rating.component";

@Component({
  selector: 'app-review',
  imports: [RatingComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  review:InputSignal<IReview> = input.required<IReview>()
}
