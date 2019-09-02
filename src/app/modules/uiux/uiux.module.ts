import { AntModule } from "./../ant/ant.module";
import { LazyImageComponent } from "./components/dynamic-cursor/lazy-image.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiuxRoutingModule } from "./uiux-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from "./components/table/table.component";
@NgModule({
  declarations: [LazyImageComponent, TableComponent],
  imports: [CommonModule, UiuxRoutingModule, SharedModule, AntModule]
})
export class UiuxModule {}
