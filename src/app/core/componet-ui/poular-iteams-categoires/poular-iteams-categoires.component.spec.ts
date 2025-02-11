import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { PoularIteamsCategoiresComponent } from './poular-iteams-categoires.component';
import { NgClass } from '@angular/common';
import { FirstuppercasePipe } from '../../../shared/pipe/firstUpercase/firstuppercase.pipe';
import { categoriesAdapt } from '../../../mocapdata/adaptcategoreis/adaptcategories';

describe('PoularIteamsCategoiresComponent', () => {
  let componet: PoularIteamsCategoiresComponent;
  let fixure: ComponentFixture<PoularIteamsCategoiresComponent>;
  let ele: any;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgClass, FirstuppercasePipe],
    })
      .compileComponents()
      .then(() => {
        fixure = TestBed.createComponent(PoularIteamsCategoiresComponent);
        componet = fixure.componentInstance;
        ele = fixure.debugElement;
      });
  }));

  it('should create componet PoularIteamsCategoiresComponent', () => {
    expect(componet).toBeTruthy();
  });

  it('should return product-catogory from PoularIteamsCategoiresComponent', () => {
    componet.catgorys =categoriesAdapt ;
    fixure.detectChanges();
    const cardS = ele.queryAll(By.css('.categoires'));
    expect(cardS).toBeTruthy();
    expect(cardS.length).toBe(2);
  });

  it('should return first elemnt',()=>{
    componet.catgorys = categoriesAdapt ;
    fixure.detectChanges();
    const firstCard = ele.query(By.css('.categoires'));

     expect(firstCard.nativeElement.textContent).toContain(categoriesAdapt[0].name.charAt(0).toUpperCase() + categoriesAdapt[0].name.slice(1));
  })





});
