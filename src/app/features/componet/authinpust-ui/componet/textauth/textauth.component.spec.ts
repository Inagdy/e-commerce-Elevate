import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextauthComponent } from './textauth.component';

describe('TextauthComponent', () => {
  let component: TextauthComponent;
  let fixture: ComponentFixture<TextauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextauthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
