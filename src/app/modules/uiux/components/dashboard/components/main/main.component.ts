import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
@Component({
  selector: "dashboard-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // const mainScroll = document.getElementById("main");
    // mainScroll.onscroll = () => {
    //   console.log(mainScroll.scrollTop);
    // };
  }

  redirect() {
    this.router.navigate(["/uiux/buttons/uiux"], {
      skipLocationChange: true,
    });
  }
}
