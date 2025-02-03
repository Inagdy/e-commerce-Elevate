import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthinpustUiComponent } from './authinpust-ui.component';

describe('AuthinpustUiComponent', () => {
  let component: AuthinpustUiComponent;
  let fixture: ComponentFixture<AuthinpustUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthinpustUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthinpustUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
