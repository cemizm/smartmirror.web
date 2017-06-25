import {Injectable} from "@angular/core";
import {DataCacheService} from "./data-cache.service";
import {UUID} from "angular2-uuid";

export interface MirrorSetting {
  id: string;
}

@Injectable()
export class MirrorSettingService {

  private readonly settingKey = "settings";

  constructor(private dcs: DataCacheService) {

  }

  getId(): string {
    let ms = this.getSettings();
    return ms.id;
  }

  private getSettings(): MirrorSetting {
    let ms = this.dcs.getData<MirrorSetting>(this.settingKey);
    if (ms == null) {
      ms = {id: UUID.UUID()};
      this.dcs.setData<MirrorSetting>(this.settingKey, ms);
    }

    return ms;
  }

  private saveSettings(ms: MirrorSetting): void {
    if (ms == null) {
      return;
    }
    this.dcs.setData<MirrorSetting>(this.settingKey, ms);
  }

}
