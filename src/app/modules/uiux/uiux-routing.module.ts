import { LazyImageComponent } from "./components/dynamic-cursor/lazy-image.component";
import { TableComponent } from "./components/table/table.component";
import { ButtonsComponent } from "./../shared/components/buttons/buttons.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "lazyImage",
    component: LazyImageComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "buttons/:id",
    component: ButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiuxRoutingModule {}
