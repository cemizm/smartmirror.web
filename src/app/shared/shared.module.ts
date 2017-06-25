import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdGridListModule, MdListModule} from "@angular/material";
import {DataCacheService} from "./services/data-cache.service";
import {MirrorSettingService} from "./services/mirror-setting.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    MdListModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    MdListModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DataCacheService,
        MirrorSettingService
      ]
    };
  }
}
