import { Component } from '@angular/core';
import { BottonComponent } from "../../../shared/components/UI/button/button.component";

@Component({
  selector: 'app-trusted-by',
  imports: [BottonComponent],
  templateUrl: './trasted-by.component.html',
  styleUrl: './trasted-by.component.scss'
})
export class trustedByComponent {
  public images:string[]=['coconut.png','ginyard.png','habus.png','ingoude.png','ingoude2.png','velvet.png']

}
