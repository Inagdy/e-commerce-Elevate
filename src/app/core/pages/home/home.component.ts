import { Component } from '@angular/core';
import { PoularIteamsCategoiresComponent } from "../../componet-ui/poular-iteams-categoires/poular-iteams-categoires.component";
import { PoularIteamsComponent } from "../poular-iteams/poular-iteams.component";

@Component({
  selector: 'app-home',
  imports: [ PoularIteamsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
