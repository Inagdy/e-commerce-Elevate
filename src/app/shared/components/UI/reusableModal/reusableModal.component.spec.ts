import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reusableModal } from './reusableModal.component';

describe('ModallayerComponent', () => {
  let component: reusableModal;
  let fixture: ComponentFixture<reusableModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [reusableModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(reusableModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
