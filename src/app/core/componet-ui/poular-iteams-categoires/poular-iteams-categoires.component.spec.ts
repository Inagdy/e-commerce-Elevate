import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoularIteamsCategoiresComponent } from './poular-iteams-categoires.component';

describe('PoularIteamsCategoiresComponent', () => {
  let component: PoularIteamsCategoiresComponent;
  let fixture: ComponentFixture<PoularIteamsCategoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoularIteamsCategoiresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoularIteamsCategoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
