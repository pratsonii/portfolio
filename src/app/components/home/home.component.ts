import { UserIp } from "./../../models/user-ip";
import { map, flatMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  ipUrl: string = "https://api.ipify.org/?format=json";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getIp()
      .pipe(flatMap(data => this.getIpDetails(data)))
      .subscribe(console.log);
  }

  getIp(): Observable<string> {
    return this.http.get(this.ipUrl).pipe(map((res: { ip: string }) => res.ip));
  }

  getIpDetails(ip: string): Observable<UserIp> {
    return this.http.get(`https://ipapi.co/${ip}/json/`).pipe(
      map((res: any) => {
        return new UserIp(res);
      })
    );
  }
}
