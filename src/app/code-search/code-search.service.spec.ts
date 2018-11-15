import { TestBed } from '@angular/core/testing';

import { CodeSearchService } from './code-search.service';

describe('CodeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeSearchService = TestBed.get(CodeSearchService);
    expect(service).toBeTruthy();
  });
});
