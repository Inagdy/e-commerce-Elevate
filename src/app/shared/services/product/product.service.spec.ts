import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { AdaptallproductService } from './adapt/adaptcatogres/adaptallcatogres.service';
import { of, throwError } from 'rxjs';

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
    const mockResponse = {
      message: "success",
      products: [
        {
          _id: "673e1cd711599201718280fb",
          title: "Wdding Flower",
          slug: "wdding-flower",
          description: "This is a Pack of White Widding Flowers",
          imgCover: "https://flower.elevateegy.com/uploads/fefa790a-f0c1-42a0-8699-34e8fc065812-cover_image.png",
          images: [
            "https://flower.elevateegy.com/uploads/66c36d5d-c067-46d9-b339-d81be57e0149-image_one.png",
            "https://flower.elevateegy.com/uploads/f27e1903-74cf-4ed6-a42c-e43e35b6dd14-image_three.png",
            "https://flower.elevateegy.com/uploads/500fe197-0e16-4b01-9a0d-031ccb032714-image_two.png"
          ],
          price: 250,
          priceAfterDiscount: 100,
          quantity: 4371,
          category: "673c46fd1159920171827c85",
          occasion: "673b34c21159920171827ae0",
          createdAt: "2024-11-20T17:31:03.303Z",
          updatedAt: "2025-01-18T20:03:40.977Z",
          __v: 0,
          discount: 50,
          sold: 291,
          id: "673e1cd711599201718280fb"
        },
        {
          _id: "673e2bd91159920171828139",
          title: "Red Wdding Flower",
          slug: "red-wdding-flower",
          description: "This is a Pack of Red Widding Flowers",
          imgCover: "https://flower.elevateegy.com/uploads/5452abf4-2040-43d7-bb3d-3ae8f53c4576-cover_image.png",
          images: [
            "https://flower.elevateegy.com/uploads/ba028e59-410f-43ac-aed5-f4f97c102b98-image_four.png",
            "https://flower.elevateegy.com/uploads/f89bc954-eb0d-4efb-928f-6717f77b69ed-image_one.png",
            "https://flower.elevateegy.com/uploads/5ed2d072-485b-4a53-a0fa-a41412791397-image_three.png",
            "https://flower.elevateegy.com/uploads/c0992ec6-d3c0-4a54-b7ec-4cf000138367-image_two.png"
          ],
          price: 250,
          priceAfterDiscount: 150,
          quantity: 927,
          category: "673c46fd1159920171827c85",
          occasion: "673b34c21159920171827ae0",
          createdAt: "2024-11-20T18:35:05.594Z",
          updatedAt: "2025-01-18T00:53:57.792Z",
          __v: 0,
          sold: 73,
          discount: 50,
          id: "673e2bd91159920171828139"
        },
        // Add more products as needed
      ]
    };

    const adaptedResponse = {
      product: [
        {
          id: "673e1cd711599201718280fb",
          title: "Wdding Flower",
          slug: "wdding-flower",
          description: "This is a Pack of White Widding Flowers",
          imgCover: "https://flower.elevateegy.com/uploads/fefa790a-f0c1-42a0-8699-34e8fc065812-cover_image.png",
          images: [
            "https://flower.elevateegy.com/uploads/66c36d5d-c067-46d9-b339-d81be57e0149-image_one.png",
            "https://flower.elevateegy.com/uploads/f27e1903-74cf-4ed6-a42c-e43e35b6dd14-image_three.png",
            "https://flower.elevateegy.com/uploads/500fe197-0e16-4b01-9a0d-031ccb032714-image_two.png"
          ],
          price: 250,
          priceAfterDiscount: 100,
          sold: 291,
          discount: 50,
        },
        {
          id: "673e2bd91159920171828139",
          title: "Red Wdding Flower",
          slug: "red-wdding-flower",
          description: "This is a Pack of Red Widding Flowers",
          imgCover: "https://flower.elevateegy.com/uploads/5452abf4-2040-43d7-bb3d-3ae8f53c4576-cover_image.png",
          images: [
            "https://flower.elevateegy.com/uploads/ba028e59-410f-43ac-aed5-f4f97c102b98-image_four.png",
            "https://flower.elevateegy.com/uploads/f89bc954-eb0d-4efb-928f-6717f77b69ed-image_one.png",
            "https://flower.elevateegy.com/uploads/5ed2d072-485b-4a53-a0fa-a41412791397-image_three.png",
            "https://flower.elevateegy.com/uploads/c0992ec6-d3c0-4a54-b7ec-4cf000138367-image_two.png"
          ],
          price: 250,
          priceAfterDiscount: 150,
          sold: 73,
          discount: 50,
        }
        // Adapt other products similarly
      ]
    };

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