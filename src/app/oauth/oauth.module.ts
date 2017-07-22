import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../shared/shared.module";


export const ModuleRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes),
  ],
  declarations: [LoginComponent]
})
export class OAuthModule {
}
