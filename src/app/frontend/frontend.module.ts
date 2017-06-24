import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TicketComponent} from "./ticket/ticket.component";
import {WidgetsModule} from "./widgets/widgets.module";
import {InitComponent} from "./init/init.component";

export const ModuleRoutes: Routes = [
  {path: '', component: InitComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes),
    WidgetsModule
  ],
  declarations: [HomeComponent, TicketComponent, InitComponent]
})
export class FrontendModule {
}
