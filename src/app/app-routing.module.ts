import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
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
  },
  {
    path: "artificial",
    loadChildren: () =>
      import("../app/modules/artificial/artificial.module").then(
        m => m.ArtificialModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
