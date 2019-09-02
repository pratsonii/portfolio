import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root"
})
export class TableService {
  private userApi: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.userApi).pipe(
      map(data => {
        const array = data as any[];
        const details = array.map(data => new User(data));
        return details;
      })
    );
  }
}
