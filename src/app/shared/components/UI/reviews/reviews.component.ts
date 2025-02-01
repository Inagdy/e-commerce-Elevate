import { Component, signal } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IReview } from '../../../../core/interfaces/review';
import { ReviewComponent } from "./review/review.component";
@Component({
  selector: 'app-reviews',
  imports: [CarouselModule, ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews = signal<IReview[]>([]);
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit()
  {
    this.reviews.set([
      {
        id:1,
        reviewerName : "ahmed mohamed",
        reviewerDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole : "customer",
        reviewerRate :4,
        reviewerPhoto : "images/img10.png "
      },
      {
        id:2,
        reviewerName : "ahmed mohamed",
        reviewerDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole : "customer",
        reviewerRate :4,
        reviewerPhoto : "images/img11.png "
      },
      {
        id:3,
        reviewerName : "ahmed mohamed",
        reviewerDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole : "customer",
        reviewerRate :4,
        reviewerPhoto : "images/img12.png "
      },
      {
        id:4,
        reviewerName : "ahmed mohamed",
        reviewerDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole : "customer",
        reviewerRate :4,
        reviewerPhoto : "images/img13.png "
      },
      {
        id:5,
        reviewerName : "ahmed mohamed",
        reviewerDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole : "customer",
        reviewerRate :4,
        reviewerPhoto : "images/img11.png "
      },
    ])
  }
}
