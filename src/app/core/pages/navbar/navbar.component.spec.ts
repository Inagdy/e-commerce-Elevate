import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
      });
  }));

fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
