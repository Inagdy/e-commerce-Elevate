import { Component } from '@angular/core';
import { categoriesSliderComponent } from "../categories-slider/categories-slider.component";
import { PoularIteamsComponent } from "../../componet/poular-iteams/poular-iteams.component";
import { OurgallaryComponent } from "../../componet/ourgallary/ourgallary.component";


@Component({
  selector: 'app-home',
  imports: [categoriesSliderComponent, PoularIteamsComponent, OurgallaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
