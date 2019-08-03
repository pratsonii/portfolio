import { BackNav } from "./interface/back-nav";
import { BackNavigationService } from "./services/back-navigation.service";
import { Component } from "@angular/core";
import { RoutingService } from "./services/routing.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app34Forte";
  showBackNav: boolean;
  backNav: BackNav;

  constructor(
    private router: RoutingService,
    private backNavServ: BackNavigationService
  ) {
    this.backNavServ.navSub.subscribe((nav: BackNav) => {
      this.backNav = nav;
      this.showBackNav = nav.show;
    });
  }

  redirect() {
    this.router.backNavigation(this.backNav);
  }
}
