import { AntModule } from "./../ant/ant.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { ButtonsComponent } from "./components/buttons/buttons.component";

@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule, SharedRoutingModule, AntModule]
})
export class SharedModule {}
