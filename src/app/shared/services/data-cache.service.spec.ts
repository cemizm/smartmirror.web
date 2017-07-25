import { TestBed, inject } from '@angular/core/testing';

import { DataCacheService } from './data-cache.service';
import {StorageService} from "@cemizm/smartmirror-shared";

describe('DataCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCacheService, StorageService]
    });
  });

  it('should ...', inject([DataCacheService], (service: DataCacheService) => {
    expect(service).toBeTruthy();
  }));
});
