import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoularIteamsComponent } from './poular-iteams.component';

describe('PoularIteamsComponent', () => {
  let component: PoularIteamsComponent;
  let fixture: ComponentFixture<PoularIteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoularIteamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoularIteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
