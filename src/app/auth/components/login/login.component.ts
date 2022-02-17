import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserValidator} from "../../../core/validators/user.validator";
import {AuthService} from "../../services/auth.service";
import {SnackBarService} from "../../../shared/snack-bar/snack-bar.service";
import {LocalStorageService} from "../../../core/local-storage/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, UserValidator.passwordValidate]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(data => {
          this.snackBarService.success(`login_success`);
          this.localStorageService.setItem(`user`, data.data);

          // todo: redirect home page
        }, error => {
          this.snackBarService.error(`login_error`);
        })
    }
  }
}
