import { register } from "./register.actions";
import { User } from "./../../interface/user";
import { BackNavigationService } from "./../../services/back-navigation.service";
import { Validators, NgForm } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  animations: [
    trigger("flyInOut", [
      transition(":enter", [
        style({ transform: "translateX(100%)" }),
        animate(350)
      ])
    ])
  ]
})
export class RegistrationComponent implements OnInit {
  validateForm: FormGroup;
  users$: Observable<User[]>;
  errorMessage: string;

  submitForm(): void {
    console.log("submitForm");
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let user: User = {
      email: this.validateForm.get("email").value,
      password: this.validateForm.get("password").value,
      nickName: this.validateForm.get("nickname").value,
      website: this.validateForm.get("website").value
    };

    this.validate(user);

    if (this.errorMessage) {
      this.message.error(this.errorMessage, { nzDuration: 3000 });
      this.errorMessage = null;
      this.validateForm.reset();
    } else {
      this.store.dispatch(register(user));
      this.message.success("Registration successfull !", {
        nzDuration: 3000
      });
      setTimeout(() => {
        this.route.navigate(["/login"], { skipLocationChange: true });
      }, 4000);
    }
  }

  validate(user: User) {
    this.users$.subscribe(x => {
      for (let u of x) {
        if (u.email === user.email) {
          this.errorMessage = "User already exist !";
          break;
        }
      }
    });
  }

  showStoreValue() {
    this.users$.subscribe((u: User[]) => u.forEach(console.log));
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: FormBuilder,
    private backNav: BackNavigationService,
    private route: Router,
    private store: Store<User[]>,
    private message: NzMessageService
  ) {
    this.users$ = store.pipe(select("count"));
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ["+86"],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
    this.backNav.changeNavigation({
      route: "login",
      routeParam: "",
      show: true
    });
  }
}
