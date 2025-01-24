import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PoularIteamsComponent } from "../poular-iteams/poular-iteams.component";
import { GategoriesSliderComponent } from "../../../features/pages/gategories-slider/gategories-slider.component";


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PoularIteamsComponent, GategoriesSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
