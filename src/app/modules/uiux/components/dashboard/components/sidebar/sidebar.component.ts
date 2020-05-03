import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dashboard-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirect() {
    this.router.navigate(["/uiux/buttons/uiux"], { skipLocationChange: true });
  }
}
