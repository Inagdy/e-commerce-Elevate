import { Component } from '@angular/core';

import { CircleUiComponent } from "../../../core/componet-ui/circle-ui/circle-ui.component";
import { CircleButtonComponent } from "../../../shared/components/circle-button/circle-button.component";
import { BottonComponent } from '../../../shared/components/UI/button/button.component';

@Component({
  selector: 'app-about-us',
  imports: [BottonComponent, CircleButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
 
public titles=['Streamlined Shipping Experience','Affordable Modern Design','Competitive Price & Easy To Shop','We Made Awesome Products']
}
