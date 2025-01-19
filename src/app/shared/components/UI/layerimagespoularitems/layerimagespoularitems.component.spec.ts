import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerimagespoularitemsComponent } from './layerimagespoularitems.component';

describe('LayerimagespoularitemsComponent', () => {
  let component: LayerimagespoularitemsComponent;
  let fixture: ComponentFixture<LayerimagespoularitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerimagespoularitemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerimagespoularitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
