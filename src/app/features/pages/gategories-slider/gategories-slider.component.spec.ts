import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { GategoriesSliderComponent } from './gategories-slider.component';

describe('GategoriesSliderComponent', () => {
  let component: GategoriesSliderComponent;
  let fixture: ComponentFixture<GategoriesSliderComponent>;

  beforeEach(waitForAsync (() => {
      TestBed.configureTestingModule({
      imports: [GategoriesSliderComponent]
    })
    .compileComponents().then(() => {   
      fixture = TestBed.createComponent(GategoriesSliderComponent);
      component = fixture.componentInstance;
    });
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
