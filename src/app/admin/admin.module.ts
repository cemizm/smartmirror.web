import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

import {TestComponent} from './test/test.component';

export const ModuleRoutes: Routes = [
  {path: 'test', component: TestComponent},
  {path: '**', redirectTo: 'test', pathMatch: 'full'}
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes)
  ],
  declarations: [TestComponent]
})
export class AdminModule {
}
