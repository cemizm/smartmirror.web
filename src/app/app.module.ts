import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {SmartMirrorModule} from "@cemizm/smartmirror-shared";
import {FrontendModule} from "./frontend/frontend.module";
import {OAuthModule} from "./oauth/oauth.module";

export const AppRoutes: Routes = [
  {path: 'frontend', loadChildren: './frontend/frontend.module#FrontendModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'auth', loadChildren: './oauth/oauth.module#OAuthModule'},
  {path: '', redirectTo: '/frontend', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FrontendModule,
    OAuthModule,
    RouterModule.forRoot(AppRoutes),
    SmartMirrorModule.forRoot({apiUrl: environment.api, rtUrl: environment.socket}),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
