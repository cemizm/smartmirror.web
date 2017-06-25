import { TestBed, inject } from '@angular/core/testing';

import { MirrorSettingService } from './mirror-setting.service';

describe('MirrorSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MirrorSettingService]
    });
  });

  it('should ...', inject([MirrorSettingService], (service: MirrorSettingService) => {
    expect(service).toBeTruthy();
  }));
});
