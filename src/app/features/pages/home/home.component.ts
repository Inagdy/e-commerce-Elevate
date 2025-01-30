import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/pages/navbar/navbar.component";
import { PoularIteamsComponent } from "../../../core/pages/poular-iteams/poular-iteams.component";
import {categoriesSliderComponent } from "../categories-slider/categories-slider.component";


@Component({
  selector: 'app-home',
  imports: [PoularIteamsComponent, categoriesSliderComponent, categoriesSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
