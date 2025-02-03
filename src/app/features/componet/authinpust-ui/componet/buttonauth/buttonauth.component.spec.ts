import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonauthComponent } from './buttonauth.component';

describe('ButtonauthComponent', () => {
  let component: ButtonauthComponent;
  let fixture: ComponentFixture<ButtonauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonauthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
