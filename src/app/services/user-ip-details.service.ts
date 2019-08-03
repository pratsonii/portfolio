import { UserIp } from "./../models/user-ip";
import { HttpClient } from "@angular/common/http";

import { map, flatMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserIpDetailsService {
  ipUrl: string = "https://api.ipify.org/?format=json";

  userIpDetailsResponse: any;
  constructor(private http: HttpClient) {}

  getUserIpDetails(): Observable<UserIp> {
    return this.getIp().pipe(flatMap(data => this.getIpDetails(data)));
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
