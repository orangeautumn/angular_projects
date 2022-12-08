import { TestBed } from '@angular/core/testing';

import { ImagesLoadingService } from './image-loading.service';

describe('ImageServiceService', () => {
  let service: ImagesLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
