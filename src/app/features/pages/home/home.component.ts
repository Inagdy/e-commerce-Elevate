import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/pages/navbar/navbar.component";
import { PoularIteamsComponent } from "../../../core/pages/poular-iteams/poular-iteams.component";
import { GategoriesSliderComponent } from "../gategories-slider/gategories-slider.component";
import { AboutUsComponent } from "../about-us/about-us.component";


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PoularIteamsComponent, GategoriesSliderComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
