import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasspageurlComponent } from './forgetpasspageurl.component';

describe('ForgetpasspageurlComponent', () => {
  let component: ForgetpasspageurlComponent;
  let fixture: ComponentFixture<ForgetpasspageurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetpasspageurlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpasspageurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
