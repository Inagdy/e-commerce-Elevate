import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftComponent } from './special-gift.component';

describe('SpecialGiftComponent', () => {
  let component: SpecialGiftComponent;
  let fixture: ComponentFixture<SpecialGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
