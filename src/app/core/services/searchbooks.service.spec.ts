import { TestBed } from '@angular/core/testing';

import { SearchbooksService } from './searchbooks.service';

describe('SearchbooksService', () => {
  let service: SearchbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
