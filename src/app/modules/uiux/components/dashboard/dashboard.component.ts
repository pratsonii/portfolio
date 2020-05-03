import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.components.scss"],
  animations: [
    trigger("flyInOut", [
      transition(":enter", [
        style({ transform: "translateY(100%)" }),
        animate(450),
      ]),
      transition(":leave", [
        style({ transform: "translateY(-100%)" }),
        animate(450),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  ngOnDestroy(): void {
    console.log("on destroyed");
  }

  ngOnInit() {
    console.log("on in it");
  }
}
