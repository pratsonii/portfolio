import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { ArtificialRoutingModule } from "./artificial-routing.module";
import { ImageClassifierComponent } from "./image-classifier/image-classifier.component";
import { NzListModule } from "ng-zorro-antd/list";
@NgModule({
  declarations: [ImageClassifierComponent],
  imports: [
    CommonModule,
    ArtificialRoutingModule,
    SharedModule,
    NzUploadModule,
    NzListModule
  ]
})
export class ArtificialModule {}
