import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test/test.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./widgets/weather/weather.component";

export const ModuleRoutes: Routes = [
  {path: '', component: TestComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes)
  ],
  declarations: [TestComponent, WeatherComponent]
})
export class FrontendModule {
}
