import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurgallaryComponent } from './ourgallary.component';

describe('OurgallaryComponent', () => {
  let component: OurgallaryComponent;
  let fixture: ComponentFixture<OurgallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurgallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurgallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
