import { LazyImageComponent } from "./components/lazy-image/lazy-image.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "lazyImage",
    component: LazyImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiuxRoutingModule {}
