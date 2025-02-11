import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpagesmodalComponent } from './authpagesmodal.component';

describe('AuthpagesmodalComponent', () => {
  let component: AuthpagesmodalComponent;
  let fixture: ComponentFixture<AuthpagesmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthpagesmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpagesmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
