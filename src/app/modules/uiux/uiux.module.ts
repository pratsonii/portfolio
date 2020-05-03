import { AntModule } from "./../ant/ant.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiuxRoutingModule } from "./uiux-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from "./components/table/table.component";
import { AnimationLaxComponent } from "./components/animation-lax/animation-lax.component";
import { DynamicCursorComponent } from "./components/dynamic-cursor/lazy-image.component";
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { TextOutlineComponent } from './components/text-outline/text-outline.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/components/sidebar/sidebar.component';
import { MainComponent } from './components/dashboard/components/main/main.component';
import { MainDashboardComponent } from './components/dashboard/components/main/main-dashboard/main-dashboard.component';
@NgModule({
  declarations: [DynamicCursorComponent, TableComponent, AnimationLaxComponent, LazyImageComponent, TextOutlineComponent, DashboardComponent, SidebarComponent, MainComponent, MainDashboardComponent],
  imports: [CommonModule, UiuxRoutingModule, SharedModule, AntModule]
})
export class UiuxModule {}
