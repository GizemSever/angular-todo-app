import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [AuthLayoutComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
