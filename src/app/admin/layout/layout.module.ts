import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],
  declarations: [AdminLayoutComponent]
})
export class LayoutModule {

}
