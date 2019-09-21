import { Component, OnInit, AfterViewInit } from "@angular/core";
import Bound from "node_modules/bounds.js";
@Component({
  selector: "app-lazy-image",
  templateUrl: "./lazy-image.component.html",
  styleUrls: ["./lazy-image.component.scss"]
})
export class LazyImageComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    const boundary = Bound({
      margins: { bottom: -80 }
    });

    const img: any = document.getElementById("lazyImage");

    const whenImageEnters = () => {
      console.log(img.getAttribute("data-src"));
      img.setAttribute("src", img.getAttribute("data-src"));
      console.log(img);
      img.classList.add("reveal");
      console.log("Image");
    };
    const whenImageLeaves = () => {
      img.classList.remove("reveal");
    };

    boundary.watch(img, whenImageEnters, whenImageLeaves);
  }
  constructor() {}

  ngOnInit() {}
}
