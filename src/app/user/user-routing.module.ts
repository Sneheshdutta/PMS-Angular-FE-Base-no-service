import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AadharComponent} from './aadhar/aadhar.component';
import {AmountComponent} from './amount/amount.component';

const routes: Routes = [
  {path:'userlogin', component:LoginComponent},
  {path:'aadhar', component:AadharComponent},
  {path:'amount', component:AmountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
