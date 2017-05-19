import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";

export const AppRoutes: Routes = [
  {path: '', loadChildren: './frontend/frontend.module#FrontendModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
