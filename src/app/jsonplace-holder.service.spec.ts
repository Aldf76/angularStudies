import { TestBed } from '@angular/core/testing';

import { JsonplaceHolderService } from './jsonplace-holder.service';

describe('JsonplaceHolderServiceService', () => {
  let service: JsonplaceHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
