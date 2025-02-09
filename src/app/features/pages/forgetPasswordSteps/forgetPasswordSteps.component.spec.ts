import { ComponentFixture, TestBed } from '@angular/core/testing';
import { forgetPasswordSteps } from './forgetPasswordSteps.component';


describe('ForgetpasswordpageComponent', () => {
  let component:forgetPasswordSteps ;
  let fixture: ComponentFixture<forgetPasswordSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [forgetPasswordSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(forgetPasswordSteps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
