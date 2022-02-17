import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserValidator} from "../../../core/validators/user.validator";
import {AuthService} from "../../services/auth.service";
import {SnackBarService} from "../../../shared/snack-bar/snack-bar.service";
import {LocalStorageService} from "../../../core/local-storage/local-storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private storageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, UserValidator.nameValidator]],
      surname: ["", [Validators.required, UserValidator.surnameValidator]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, UserValidator.passwordValidate]]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe(data => {
          this.snackBarService.success(`register_success`);
          this.storageService.setItem(`user`, data.data);

          // todo: redirect home page
        }, error => {
          this.snackBarService.error(`register_fail`);
        });
    }
  }

}
