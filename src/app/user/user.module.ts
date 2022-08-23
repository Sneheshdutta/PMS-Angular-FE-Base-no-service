import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { AmountComponent } from './amount/amount.component';


@NgModule({
  declarations: [
    LoginComponent,
    AadharComponent,
    AmountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
