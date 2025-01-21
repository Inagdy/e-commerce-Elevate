import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CircleUiComponent } from '../circle-ui/circle-ui.component';
import { CategoriesCardComponent } from './categories-card.component';
import { poularproduct } from '../../../shared/interfaces/product/poularproduct';
import { adaptedResponse } from '../../../mocapdata/adaptproduct/adaptproduct';
import { By } from '@angular/platform-browser';

describe('CategoriesCardComponent', () => {
  let componet: CategoriesCardComponent;
  let fixure: ComponentFixture<CategoriesCardComponent>;
  let ele: any;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CategoriesCardComponent, CircleUiComponent],
    })
      .compileComponents()
      .then(() => {
        fixure = TestBed.createComponent(CategoriesCardComponent);
        componet = fixure.componentInstance;
        ele = fixure.debugElement;
      });
  }));

  it('should create componet CategoriesCardComponent', () => {
    expect(componet).toBeTruthy();
  });

  it('should return product from CategoriesCardComponent', () => {
    componet.products = adaptedResponse;
    fixure.detectChanges();
    const cardS = ele.queryAll(By.css('.cardproduct'));
    expect(cardS).toBeTruthy();
    expect(cardS.length).toBe(2);
  });

  it('should display the first product', () => {
    componet.products = adaptedResponse;
    fixure.detectChanges();
    const cardsiteam = componet.products.product[0];
    const title = ele.queryAll(By.css('.card-text'));
    expect(title[0].nativeElement.textContent).toContain(cardsiteam.title);
  });


  it('should emit images when getallimages is called', () => {
    spyOn(componet.imagses, 'emit'); 

    const images = adaptedResponse.product[0].images; 
    componet.getallimages(images);

    expect(componet.imagses.emit).toHaveBeenCalledWith(images);
  });
});
