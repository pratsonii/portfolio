import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { TableComponent } from "./components/table/table.component";
import { ButtonsPanelComponent } from "./components/buttons-panel/buttons-panel.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "buttonPanel/:id",
    component: ButtonsPanelComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "uiux",
    loadChildren: () =>
      import("../app/modules/uiux/uiux.module").then(m => m.UiuxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
