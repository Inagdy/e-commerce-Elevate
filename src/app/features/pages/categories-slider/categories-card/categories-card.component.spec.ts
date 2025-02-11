import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { categoriesCardComponent } from './categories-card.component';

describe('GategoriesCardComponent', () => {
  let component: categoriesCardComponent;
  let fixture: ComponentFixture<categoriesCardComponent>;

  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      imports: [categoriesCardComponent]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(categoriesCardComponent);
      component = fixture.componentInstance;
    });
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
