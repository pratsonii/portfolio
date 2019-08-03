import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiuxRoutingModule } from "./uiux-routing.module";
import { LazyImageComponent } from "./components/lazy-image/lazy-image.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations: [LazyImageComponent],
  imports: [CommonModule, UiuxRoutingModule, SharedModule]
})
export class UiuxModule {}
