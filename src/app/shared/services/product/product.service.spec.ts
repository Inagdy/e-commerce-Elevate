import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { AdaptallproductService } from './adapt/adaptcatogres/adaptallcatogres.service';
import { of, throwError } from 'rxjs';
import { adaptedResponse } from '../../../mocapdata/adaptproduct/adaptproduct';
import { mockResponse } from '../../../mocapdata/product/product';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;
  let adaptallproductService: jasmine.SpyObj<AdaptallproductService>;

  beforeEach(() => {
    adaptallproductService = jasmine.createSpyObj('AdaptallproductService', ['adaptallproductService']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: AdaptallproductService, useValue: adaptallproductService }
      ]
    });

    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should fetch popular products and adapt them', () => {

    // Set up the spy to return the adapted response
    adaptallproductService.adaptallproductService.and.returnValue(adaptedResponse);

    productService.getAllpoularproduct('Wdding').subscribe((data) => {
      expect(data).toEqual(adaptedResponse);
      expect(data.product.length).toEqual(mockResponse.products.length); // Check length
    });

    const req = httpTestingController.expectOne('https://flower.elevateegy.com/api/v1/products?keyword=Wdding');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should handle errors', () => {
    const errorMessage = '404 error';

    productService.getAllpoularproduct('Wdding').subscribe(
      () => fail('expected an error, not products'),
      (error) => expect(error.status).toEqual(404)
    );

    const req = httpTestingController.expectOne('https://flower.elevateegy.com/api/v1/products?keyword=Wdding');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });
});