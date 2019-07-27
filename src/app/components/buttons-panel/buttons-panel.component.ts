import { BackNav } from "./../../interface/back-nav";
import { BackNavigationService } from "./../../services/back-navigation.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Routes } from "src/app/constants/routes";

@Component({
  selector: "app-buttons-panel",
  templateUrl: "./buttons-panel.component.html",
  styleUrls: ["./buttons-panel.component.scss"]
})
export class ButtonsPanelComponent implements OnInit {
  constructor(
    private router: Router,
    private backNav: BackNavigationService,
    private _activatedRoute: ActivatedRoute
  ) {}

  paths: any[] = [];
  ngOnInit() {
    let id = this._activatedRoute.snapshot.paramMap.get("id");
    this.paths = Routes.getRoutes(id);
    this.backNav.changeNavigation({ route: "", routeParam: null, show: false });
  }

  redirect(path: string) {
    this.router.navigate(["/" + path], { skipLocationChange: true });
  }
}
