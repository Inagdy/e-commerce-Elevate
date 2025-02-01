import { Component, signal } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IReview } from '../../../../core/interfaces/review';
import { ReviewComponent } from './review/review.component';
@Component({
  selector: 'app-reviews',
  imports: [CarouselModule, ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  reviews = signal<IReview[]>([]);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    center: false,
    dots: true,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    dotsSpeed: 1000,
    margin: 20,
    navText: [
      '<i class="pi pi-angle-left"></i>',
      '<i class="pi pi-angle-right"></i>',
    ],
  };
  ngOnInit() {
    this.reviews.set([
      {
        id: 1,
        reviewerName: 'ahmed mohamed',
        reviewerDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole: 'customer',
        reviewerRate: 3,
        reviewerPhoto: 'images/img10.png ',
      },
      {
        id: 2,
        reviewerName: 'ahmed mohamed',
        reviewerDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole: 'customer',
        reviewerRate: 1,
        reviewerPhoto: 'images/img11.png ',
      },
      {
        id: 3,
        reviewerName: 'ahmed mohamed',
        reviewerDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole: 'customer',
        reviewerRate: 2,
        reviewerPhoto: 'images/img12.png ',
      },
      {
        id: 4,
        reviewerName: 'ahmed mohamed',
        reviewerDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole: 'customer',
        reviewerRate: 4,
        reviewerPhoto: 'images/img13.png ',
      },
      {
        id: 5,
        reviewerName: 'ahmed mohamed',
        reviewerDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        reviewerRole: 'customer',
        reviewerRate: 0,
        reviewerPhoto: 'images/img11.png ',
      },
    ]);
  }
}
