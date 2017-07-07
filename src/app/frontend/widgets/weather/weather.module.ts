import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { WeatherService } from "./weather.service";
import { WeathercurrentComponent } from "./weathercurrent/weathercurrent.component";
import { WeatherpreviewComponent } from "./weatherpreview/weatherpreview.component";
import { WeatherViewComponent } from './weather-view/weather-view.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ WeathercurrentComponent, WeatherpreviewComponent, WeatherViewComponent],
  providers: [WeatherService],
  exports: [WeatherpreviewComponent, WeathercurrentComponent, WeatherViewComponent]
})
export class WeatherModule { }
