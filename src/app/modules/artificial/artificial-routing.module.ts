import { ButtonsComponent } from "./../shared/components/buttons/buttons.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ImageClassifierComponent } from "./image-classifier/image-classifier.component";

const routes: Routes = [
  {
    path: "imageClassifier",
    component: ImageClassifierComponent
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
export class ArtificialRoutingModule {}
