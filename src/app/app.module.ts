import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenComponent } from './men/men.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingbagComponent } from './shoppingbag/shoppingbag.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'; 
import { ShoppingReducer, cartReducer, wishlistReducer } from './shared/reducer';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenComponent,
    CheckoutComponent,
    HomeComponent,
    ShoppingbagComponent,
    WishlistComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   StoreModule.forRoot({
     shopping: ShoppingReducer,
     cart: cartReducer,
     wishlist: wishlistReducer
   }),
   BrowserAnimationsModule,
   ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
