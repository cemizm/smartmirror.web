import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TicketComponent} from "./ticket/ticket.component";
import {WidgetsModule} from "./widgets/widgets.module";

export const ModuleRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '/ticket', component: TicketComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ModuleRoutes),
    WidgetsModule
  ],
  declarations: [HomeComponent, TicketComponent]
})
export class FrontendModule {
}
