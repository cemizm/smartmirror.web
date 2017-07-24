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
import {MomentModule} from "angular2-moment";
import * as moment from "moment";

moment.locale("de-de");

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
    MdInputModule,
    MomentModule
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
    MirrorPipe,
    MomentModule
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
