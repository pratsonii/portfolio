import { Component, OnInit, AfterViewInit } from "@angular/core";

declare var lax: any;
@Component({
  selector: "app-text-outline",
  templateUrl: "./text-outline.component.html",
  styleUrls: ["./text-outline.component.css"],
})
export class TextOutlineComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    lax.setup(); // init
    const updateLax = () => {
      console.log(window.scrollY);
      lax.update(window.scrollY);
      window.requestAnimationFrame(updateLax);
    };

    window.requestAnimationFrame(updateLax);
  }
  constructor() {}
}
