import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdListModule,
  MdSlideToggleModule,
  MdInputModule
} from "@angular/material";
import {DataCacheService} from "./services/data-cache.service";
import {MirrorSettingService} from "./services/mirror-setting.service";
import {MirrorPipe} from "./utils/mirror.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdSlideToggleModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdSlideToggleModule,
    MdInputModule,
    MirrorPipe
  ],
  declarations: [MirrorPipe]
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
