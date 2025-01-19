import { TestBed } from '@angular/core/testing';

import { AdaptallcategoryService } from './adaptallcategory.service';

describe('AdaptallcategoryService', () => {
  let service: AdaptallcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptallcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
