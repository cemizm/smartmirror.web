import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "./weather.service";
import { WeatherComponent} from "./weather.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ WeatherComponent],
  providers: [WeatherService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeatherModule { }
