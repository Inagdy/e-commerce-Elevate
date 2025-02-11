import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsterpageComponent } from './regsterpage.component';

describe('RegsterpageComponent', () => {
  let component: RegsterpageComponent;
  let fixture: ComponentFixture<RegsterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegsterpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegsterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
