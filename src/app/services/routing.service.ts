import { BackNav } from "./../interface/back-nav";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RoutingService {
  constructor(private route: Router) {}

  navigate(route: string) {
    this.route.navigate(["/" + route], { skipLocationChange: true });
  }

  navigateWithParam(route: string, param: string) {
    this.route.navigate(["/" + route, param], { skipLocationChange: true });
  }

  backNavigation(backNav: BackNav) {
    if (backNav.routeParam) {
      this.navigateWithParam(backNav.route, backNav.routeParam);
    } else {
      this.navigate(backNav.route);
    }
  }
}
