import { Component, OnInit, AfterViewInit } from "@angular/core";

declare var lax: any;

@Component({
  selector: "app-animation-lax",
  templateUrl: "./animation-lax.component.html",
  styleUrls: ["./animation-lax.component.scss"]
})
export class AnimationLaxComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log("View init");
    lax.setup(); // init
    console.log(lax);
    const updateLax = () => {
      console.log(window.scrollY);
      lax.update(window.scrollY);
      window.requestAnimationFrame(updateLax);
    };

    window.requestAnimationFrame(updateLax);
  }
  constructor() {}

  ngOnInit() {
    console.log(window.scrollY);
  }
}
