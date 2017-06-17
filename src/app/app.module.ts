import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {SmartMirrorModule} from "@cemizm/smartmirror-shared";

export const AppRoutes: Routes = [
  {path: 'frontend', loadChildren: './frontend/frontend.module#FrontendModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '', redirectTo: '/frontend', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),

    SmartMirrorModule.forRoot({apiUrl: environment.api}),

    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
