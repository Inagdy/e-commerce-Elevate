import { Component } from '@angular/core';
import { PoularIteamsComponent } from "../../../core/pages/poular-iteams/poular-iteams.component";
import { AboutUsComponent } from "../trasted-by-us/trasted-by.component";
import { CategoriesCardComponent } from "../../../core/componet-ui/categories-card/categories-card.component";


@Component({
  selector: 'app-home',
  imports: [ PoularIteamsComponent, AboutUsComponent, CategoriesCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
