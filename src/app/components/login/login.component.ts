import { select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { BackNavigationService } from "./../../services/back-navigation.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { trigger, style, transition, animate } from "@angular/animations";
import { User } from "src/app/interface/user";
import { NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    trigger("flyInOut", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate(350)
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  loggedIn: boolean = false;
  userName: string;
  users$: Observable<User[]>;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let email: string = this.validateForm.get("userName").value;
    let password: string = this.validateForm.get("password").value;

    console.log(email);
    console.log(this.users$);

    this.users$.subscribe(_users => {
      for (let user of _users) {
        if (user.email === email && user.password === password) {
          this.userName = user.nickName;
          this.loggedIn = true;
          break;
        }
      }
    });

    if (!this.loggedIn) {
      this.message.error("Username/Password Incorrect!", {
        nzDuration: 3000
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private backNav: BackNavigationService,
    private router: Router,
    private store: Store<User[]>,
    private message: NzMessageService
  ) {
    this.users$ = store.pipe(select("count"));
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    this.backNav.changeNavigation({
      route: "buttonPanel",
      routeParam: "demo",
      show: true
    });
  }

  register() {
    this.router.navigate(["/register"], { skipLocationChange: true });
  }
}
