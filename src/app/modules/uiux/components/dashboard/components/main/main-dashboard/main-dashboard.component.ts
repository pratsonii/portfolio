import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-dashboard",
  templateUrl: "./main-dashboard.component.html",
  styleUrls: ["./main-dashboard.component.scss"],
})
export class MainDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirect() {
    this.router.navigate(["/uiux/buttons/uiux"], { skipLocationChange: true });
  }
}
