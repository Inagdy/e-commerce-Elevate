import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { AdaptallcategoryService } from './adapt/adaptallcategory.service';
import { categoriesAdapt } from '../../../mocapdata/adaptcategoreis/adaptcategories';
import { category } from '../../../mocapdata/categories/categories';

describe('CategoryService', () => {
  let service: CategoryService;

  let httpTestingController: HttpTestingController;

  let adaptedResponse: jasmine.SpyObj<AdaptallcategoryService>;

  beforeEach(() => {
    adaptedResponse = jasmine.createSpyObj('AdaptallcategoryService', [
      'adaptallcategory',
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CategoryService,
        { provide: AdaptallcategoryService, useValue: adaptedResponse },
      ],
    });

    service = TestBed.inject(CategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


it('should create a category',()=>{
expect(service).toBeTruthy()
})
 

it('should return all categories',()=>{

  adaptedResponse.adaptallcategory.and.returnValue(categoriesAdapt)
service.getAllgategory().subscribe((res)=>{
expect(res).toBeTruthy()
expect(res).toBe(categoriesAdapt)
})

let req = httpTestingController.expectOne(('https://flower.elevateegy.com/api/v1/categories'))
expect(req.request.method).toBe('GET')
req.flush(category)


})


it('should handle errors', () => {
  const errorMessage = '404 error';

  service.getAllgategory().subscribe(
    () => fail('expected an error, not products'),
    (error) => expect(error.status).toEqual(404)
  );

  const req = httpTestingController.expectOne('https://flower.elevateegy.com/api/v1/categories');
  req.flush('404 error', { status: 404, statusText: 'Not Found' });
});


});
