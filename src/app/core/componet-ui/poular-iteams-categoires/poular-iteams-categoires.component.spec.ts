import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';





import { By } from '@angular/platform-browser';
import { PoularIteamsCategoiresComponent } from './poular-iteams-categoires.component';
import { NgClass } from '@angular/common';
import { FirstuppercasePipe } from '../../../shared/pipe/firstuppercase.pipe';
import { categoriesadapt } from '../../../mocapdata/adaptcategoreis/adaptcategories';

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
    componet.catgorys =categoriesadapt ;
    fixure.detectChanges();
    const cardS = ele.queryAll(By.css('.categoires'));
    expect(cardS).toBeTruthy();
    expect(cardS.length).toBe(2);
  });

  it('should return first elemnt',()=>{
    componet.catgorys = categoriesadapt ;
    fixure.detectChanges();
    const firstCard = ele.query(By.css('.categoires'));
    
     expect(firstCard.nativeElement.textContent).toContain(categoriesadapt[0].name.charAt(0).toUpperCase() + categoriesadapt[0].name.slice(1));
  })





});
