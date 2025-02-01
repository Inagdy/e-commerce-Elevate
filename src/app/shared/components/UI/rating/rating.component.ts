import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  ratingNum:InputSignal<number> = input.required<number>();
  totalStars: number = 4;
  getStars(): string[] {
    return Array(this.totalStars).fill('').map((_, index) => 
      index < this.ratingNum() ? 'pi pi-star-fill' : 'pi pi-star'
    );
  }
}
