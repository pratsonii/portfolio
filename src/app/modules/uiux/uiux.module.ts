import { AntModule } from "./../ant/ant.module";
import { LazyImageComponent } from "./components/dynamic-cursor/lazy-image.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiuxRoutingModule } from "./uiux-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from "./components/table/table.component";
import { AnimationLaxComponent } from './components/animation-lax/animation-lax.component';
@NgModule({
  declarations: [LazyImageComponent, TableComponent, AnimationLaxComponent],
  imports: [CommonModule, UiuxRoutingModule, SharedModule, AntModule]
})
export class UiuxModule {}
