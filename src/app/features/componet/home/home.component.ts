import { Component } from '@angular/core';
import { NavbarComponent } from '../../../core/pages/navbar/navbar.component';
import { PoularIteamsComponent } from './componet/poular-iteams/poular-iteams.component';



@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PoularIteamsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
