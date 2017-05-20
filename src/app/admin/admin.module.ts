import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {LayoutModule} from "./layout/layout.module";

import {AdminLayoutComponent} from "./layout/admin-layout/admin-layout.component";

import {TestComponent} from './test/test.component';

export const ModuleRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: '', redirectTo: '/test', pathMatch: 'full'},
      {path: 'test', component: TestComponent},
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    RouterModule.forChild(ModuleRoutes)
  ],
  declarations: [TestComponent]
})
export class AdminModule {
}
