import { BackNav } from "./../interface/back-nav";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BackNavigationService {
  navVar: BackNav = { route: "", routeParam:"", show: false };
  navSub: BehaviorSubject<BackNav>;
  constructor() {
    this.navSub = new BehaviorSubject(this.navVar);
  }

  changeNavigation(nav: BackNav) {
    this.navSub.next(nav);
  }
}
