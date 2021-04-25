import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {DashboardComponent} from './dashboard.component';
import {TopnavComponent} from './topnav/topnav.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ProfileComponent} from './profile/profile.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'products',
        component: ProductsComponent
      }, {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    TopnavComponent,
    HomeComponent,
    ProductsComponent,
    ProfileComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
