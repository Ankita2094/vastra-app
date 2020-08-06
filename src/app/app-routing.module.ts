import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenComponent } from './men/men.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ShoppingbagComponent } from './shoppingbag/shoppingbag.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: '',redirectTo:'/home',pathMatch:'full'},
  { path: 'login',component: LoginComponent},
  
 {path:'mainpage', component: MainPageComponent},
  {path:'home', component: HomeComponent},
{ path: 'checkout',component: CheckoutComponent},
  {path:'men',component:MenComponent},
  { path: 'shoppingbag',component: ShoppingbagComponent},
  { path: 'wishlist',component: WishlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
