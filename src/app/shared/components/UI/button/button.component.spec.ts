import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonComponent } from './button.component';

describe('BottonComponent', () => {
  let component: BottonComponent;
  let fixture: ComponentFixture<BottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
