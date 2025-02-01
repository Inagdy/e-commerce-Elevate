import { Component, input, InputSignal } from '@angular/core';
import { IReview } from '../../../../../core/interfaces/review';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  review:InputSignal<IReview> = input.required<IReview>()
}
