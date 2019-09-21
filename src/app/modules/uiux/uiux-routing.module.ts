import { LazyImageComponent } from "./components/lazy-image/lazy-image.component";
import { AnimationLaxComponent } from "./components/animation-lax/animation-lax.component";
import { TableComponent } from "./components/table/table.component";
import { ButtonsComponent } from "./../shared/components/buttons/buttons.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DynamicCursorComponent } from "./components/dynamic-cursor/lazy-image.component";

const routes: Routes = [
  {
    path: "lazyImage",
    component: LazyImageComponent
  },
  {
    path: "dynamicCursor",
    component: DynamicCursorComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "buttons/:id",
    component: ButtonsComponent
  },
  {
    path: "animate",
    component: AnimationLaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiuxRoutingModule {}
