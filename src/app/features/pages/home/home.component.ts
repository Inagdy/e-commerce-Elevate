import { Component } from '@angular/core';
import { categoriesSliderComponent } from "../categories-slider/categories-slider.component";
import { PoularIteamsComponent } from "../../componet/poular-iteams/poular-iteams.component";
import { OurgallaryComponent } from "../../componet/ourgallary/ourgallary.component";
import { AboutUsComponent } from "../../../features/componet/about-us/about-us.component";
import {trustedByComponent} from "../../componet/trasted-by-us/trasted-by.component"
import { SideBarComponent } from "../../componet/side-bar/side-bar.component";

@Component({
  selector: 'app-home',
  imports: [categoriesSliderComponent, PoularIteamsComponent, OurgallaryComponent, AboutUsComponent, trustedByComponent, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
