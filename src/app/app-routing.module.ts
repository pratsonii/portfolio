import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { TableComponent } from "./components/table/table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "buttons",
    loadChildren: () =>
      import("../app/modules/shared/shared.module").then(m => m.SharedModule)
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
