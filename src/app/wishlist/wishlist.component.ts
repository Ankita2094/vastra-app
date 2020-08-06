


import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscribable, Subscription} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {MenComponent} from '../men/men.component';
import {CartService} from '../services/cart.service';
import { AppState} from '../shared/app-state.model';
import {ClothesCatalog} from '../shared/clothesCatalog.model';
import {LoadItemAction,ResetStateAction, AddToCartAction, AddToWishlistAction, DeleteFromWishlistAction} from '../shared/actions';
import {Observable} from 'rxjs';
import {Store,State} from '@ngrx/store';
import { cartCatalog } from '../shared/clothes-list.model';
import {DeleteItemAction} from '../shared/actions';
import { stringify } from '@angular/compiler/src/util';
import { WishList } from '../shared/wishlist-list.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit, OnDestroy {
  items: Observable<Array<WishList>>;
  
shopbag : ClothesCatalog[] =[];
private igChangeSub: Subscription;


  constructor(private store: Store<AppState>,private cartService: CartService) { 
   

  }

  ngOnInit() {
    console.log("checking is shopping bag working");
    this.shopbag = this.cartService.getProducts();
    console.log(this.shopbag);
    //this.store.select('shopping').subscribe(data =>{console.log(data)})
    this.store.select('wishlist').subscribe(d =>{console.log(d)})
    this.items = this.store.select(store => store.wishlist);
      //console.log(Object.keys(this.items));
    this.igChangeSub = this.cartService.cartProductChanged.subscribe((shopbag:ClothesCatalog[]) =>{
      this.shopbag = shopbag;

      console.log("checking is shopping bag working");
      this.items = this.store.select("wishlist");
      console.log(this.items);
    }
    );
  }



  addtoCart(data : any){

    // let temparr = new Array();
    // temparr.push(data);
    // this.producttoCart = temparr;
    // // this.producttoCart.push(data);
    
    console.log(Object.keys(data));
    // let newData = {
    //   color: data['color'],
    //   imgId: data['imgId'],
    //   wear_type: data['wear_type'],
    //   price: data['price'],
    //   titleName: data['titleName'],
    //   uniqueId: data['uniqueId'],
    //   totalCount: data['totalCount'],
    //   size : this.size
  

    // }
   
    let temparr = new Array();
   // data['size'] = "S";
    //console.log("this is data to size");
    //console.log(data);
    //temparr.push(data);
   // this.cartProduct = data;
    // this.store.dispatch(new AddToCartAction(data));
    this.store.dispatch(new AddToCartAction(data));
    this.store.select('cart').subscribe(d =>{console.log(d)})
    let id: string;
   id = data['imgId'];
    this.store.dispatch(new DeleteFromWishlistAction(id));
    
      //this.cartservice.addToCart(this.cartProduct);
     
    // console.log("in add to cart");
    // console.log(this.cartProduct);
  }

  deleteItem(data: WishList) {

   let id: string;
   id = data['imgId'];
    this.store.dispatch(new DeleteFromWishlistAction(id));
  }

  ngOnDestroy(): void{

    //this.igChangeSub.unsubscribe();
  }

}

