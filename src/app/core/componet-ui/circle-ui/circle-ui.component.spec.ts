import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleUiComponent } from './circle-ui.component';

describe('CircleUiComponent', () => {
  let component: CircleUiComponent;
  let fixture: ComponentFixture<CircleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
