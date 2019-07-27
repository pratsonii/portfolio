import { BackNavigationService } from "./../../services/back-navigation.service";
import { Component, OnInit, OnChanges } from "@angular/core";
import { TableService } from "./table.service";
import { Observable, empty } from "rxjs";
import { User } from "src/app/models/user";
import { map } from "rxjs/operators";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  constructor(
    private service: TableService,
    private backNav: BackNavigationService
  ) {}
  users: Observable<User[]>;
  ngOnInit() {
    console.log("on init");
    this.backNav.changeNavigation({
      route: "buttonPanel",
      routeParam: "demo",
      show: true
    });
    this.users = this.service.getUsers();
  }

  sort(sort: { key: string; value: string }): void {
    if (sort.key && sort.value) {
      this.users = this.users.pipe(
        map(data => {
          return data.sort((a, b) =>
            sort.value === "ascend"
              ? a[sort.key!] > b[sort.key!]
                ? 1
                : -1
              : b[sort.key!] > a[sort.key!]
              ? 1
              : -1
          );
        })
      );
    }
  }
}
