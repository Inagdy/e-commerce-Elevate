import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { categoriesSliderComponent } from './categories-slider.component';

describe('GategoriesSliderComponent', () => {
  let component: categoriesSliderComponent;
  let fixture: ComponentFixture<categoriesSliderComponent>;

  beforeEach(waitForAsync (() => {
      TestBed.configureTestingModule({
      imports: [categoriesSliderComponent]
    })
    .compileComponents().then(() => {   
      fixture = TestBed.createComponent(categoriesSliderComponent);
      component = fixture.componentInstance;
    });
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
