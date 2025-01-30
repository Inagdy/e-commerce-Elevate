import { Component } from '@angular/core';
import { NavbarComponent } from '../../../core/pages/navbar/navbar.component';
import { PoularIteamsComponent } from '../poular-iteams/poular-iteams.component';
import { OurgallaryComponent } from '../ourgallary/ourgallary.component';







@Component({
  selector: 'app-home',
  imports: [PoularIteamsComponent, OurgallaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
