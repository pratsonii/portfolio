import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dashboard-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirect() {
    this.router.navigate(["/uiux/buttons/uiux"], { skipLocationChange: true });
  }
}
