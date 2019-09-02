import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Prediction } from "src/app/interface/prediction";

@Component({
  selector: "app-image-classifier",
  templateUrl: "./image-classifier.component.html",
  styleUrls: ["./image-classifier.component.scss"]
})
export class ImageClassifierComponent implements OnInit {
  imageSrc: string;
  @ViewChild("img", { static: false }) imageEl: ElementRef;
  loading = true;
  predictions: Prediction[];

  model: any;
  constructor() {}

  async ngOnInit() {
    console.log("loading mobilenet model...");
    this.model = await mobilenet.load();
    console.log("Sucessfully loaded model");
    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.file) {
      const reader = new FileReader();

      reader.readAsDataURL(event.file.originFileObj);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);
      };
    }
  }
}
