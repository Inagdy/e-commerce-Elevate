import { PoularIteamsComponent } from './../../../core/pages/poular-iteams/poular-iteams.component';
import { Component } from '@angular/core';
import {categoriesSliderComponent } from "../categories-slider/categories-slider.component";
import { PoularIteamsComponent_1 as PoularIteamsComponent } from "../../componet/home/componet/poular-iteams/poular-iteams.component";


@Component({
  selector: 'app-home',
  imports: [PoularIteamsCategoiresComponent, categoriesSliderComponent, categoriesSliderComponent, PoularIteamsComponent_1],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
