import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModallayerComponent } from './modallayer.component';

describe('ModallayerComponent', () => {
  let component: ModallayerComponent;
  let fixture: ComponentFixture<ModallayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModallayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModallayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
