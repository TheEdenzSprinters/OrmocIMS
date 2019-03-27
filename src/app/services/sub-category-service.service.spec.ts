import { TestBed } from '@angular/core/testing';

import { SubCategoryServiceService } from './sub-category-service.service';

describe('SubCategoryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubCategoryServiceService = TestBed.get(SubCategoryServiceService);
    expect(service).toBeTruthy();
  });
});
