import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {WeatherService} from "./weather.service";
import {WeatherViewComponent} from "./weather-view/weather-view.component";


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [WeatherViewComponent],
  providers: [WeatherService],
  exports: [WeatherViewComponent]
})
export class WeatherModule {
}
