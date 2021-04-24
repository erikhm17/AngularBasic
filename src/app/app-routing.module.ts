import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[]
})
export class AppRoutingModule{

}