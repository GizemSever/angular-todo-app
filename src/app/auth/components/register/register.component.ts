import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserValidator} from "../../../core/validators/user.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public isSubmit = false;

  constructor(
    private formBuilder: FormBuilder
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
    this.isSubmit = true;
  }

}
