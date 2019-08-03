import { Routes } from "./../../../../constants/routes";
import { ActivatedRoute } from "@angular/router";
import { BackNavigationService } from "./../../../../services/back-navigation.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
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
