import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { WeatherService } from "./weather.service";
import { WeathercurrentComponent } from "./weathercurrent/weathercurrent.component";
import { WeatherpreviewComponent } from "./weatherpreview/weatherpreview.component";


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ WeathercurrentComponent, WeatherpreviewComponent],
  providers: [WeatherService],
  exports: [WeatherpreviewComponent, WeathercurrentComponent]
})
export class WeatherModule { }
