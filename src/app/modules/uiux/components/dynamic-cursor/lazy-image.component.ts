import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-dynamic-cursor",
  templateUrl: "./dynamic-cursor.component.html",
  styleUrls: ["./dynamic-cursor.component.scss"]
})
export class DynamicCursorComponent implements OnInit, AfterViewInit {
  @ViewChild("myDiv", { static: false }) myDiv: ElementRef;

  ngAfterViewInit(): void {
    document.getElementById("demo").onmousemove = e => {
      let a: any = e;

      const x = a.pageX - a.target.offsetLeft;
      const y = a.pageY - a.target.offsetTop;

      a.target.style.setProperty("--x", `${x}px`);
      a.target.style.setProperty("--y", `${y}px`);
    };
  }

  constructor() {}

  ngOnInit() {}
}
