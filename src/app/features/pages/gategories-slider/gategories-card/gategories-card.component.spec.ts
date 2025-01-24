import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { GategoriesCardComponent } from './gategories-card.component';

describe('GategoriesCardComponent', () => {
  let component: GategoriesCardComponent;
  let fixture: ComponentFixture<GategoriesCardComponent>;

  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      imports: [GategoriesCardComponent]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(GategoriesCardComponent);
      component = fixture.componentInstance;
    });
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
