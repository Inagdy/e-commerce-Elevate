import { Component } from '@angular/core';
import { NavbarComponent } from '../../../core/pages/navbar/navbar.component';
import { PoularIteamsComponent } from './componet/poular-iteams/poular-iteams.component';
import { OurgallaryComponent } from "./componet/ourgallary/ourgallary.component";







@Component({
  selector: 'app-home',
  imports: [PoularIteamsComponent, OurgallaryComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
