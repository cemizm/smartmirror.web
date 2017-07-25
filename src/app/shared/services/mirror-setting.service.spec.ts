import { TestBed, inject } from '@angular/core/testing';

import { MirrorSettingService } from './mirror-setting.service';
import {DataCacheService} from "./data-cache.service";
import {StorageService} from "@cemizm/smartmirror-shared";

describe('MirrorSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MirrorSettingService, DataCacheService, StorageService]
    });
  });

  it('should ...', inject([MirrorSettingService], (service: MirrorSettingService) => {
    expect(service).toBeTruthy();
  }));
});
