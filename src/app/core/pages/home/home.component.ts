import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PoularIteamsComponent } from "../poular-iteams/poular-iteams.component";


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PoularIteamsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
