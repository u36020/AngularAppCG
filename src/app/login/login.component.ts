import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../shared/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  myForm: FormGroup;
  error = "";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    if (this.myForm.valid) {
      if (
        this.myForm.value.username == "user" &&
        this.myForm.value.password == "password"
      ) {
        this.router.navigateByUrl("/dashboard");
        this.authService.sendToken(this.myForm.value.username);
      } else {
        this.error = "Please check the username / password !!!";
      }
    }
  }
}
