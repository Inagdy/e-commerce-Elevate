import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordpageComponent } from './forgetpasswordpage.component';

describe('ForgetpasswordpageComponent', () => {
  let component: ForgetpasswordpageComponent;
  let fixture: ComponentFixture<ForgetpasswordpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetpasswordpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpasswordpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
