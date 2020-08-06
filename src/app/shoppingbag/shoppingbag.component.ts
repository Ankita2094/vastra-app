import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscribable, Subscription} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {MenComponent} from '../men/men.component';
import {CartService} from '../services/cart.service';
import { AppState} from '../shared/app-state.model';
import {ClothesCatalog} from '../shared/clothesCatalog.model';
import {LoadItemAction,ResetStateAction} from '../shared/actions';
import {Observable} from 'rxjs';
import {Store,State} from '@ngrx/store';
import { cartCatalog } from '../shared/clothes-list.model';
import {DeleteItemAction} from '../shared/actions';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrls: ['./shoppingbag.component.css']
})
export class ShoppingbagComponent implements OnInit, OnDestroy {
  items: Observable<Array<cartCatalog>>;
  
shopbag : ClothesCatalog[] =[];
private igChangeSub: Subscription;
priceTotal : number;

  constructor(private store: Store<AppState>,private cartService: CartService) { 
   

  }

  ngOnInit() {
    console.log("checking is shopping bag working");
    this.shopbag = this.cartService.getProducts();
    console.log(this.shopbag);
    
    this.store.select('cart').subscribe(d =>{console.log(d)})
    this.items = this.store.select(store => store.cart);
      //console.log(Object.keys(this.items));
    this.igChangeSub = this.cartService.cartProductChanged.subscribe((shopbag:ClothesCatalog[]) =>{
      this.shopbag = shopbag;

      console.log("checking is shopping bag working");
      this.items = this.store.select("cart");
      console.log(this.items);
    }
    );
    let total = 0;
    var keys = Object.keys(this.items);
    this.store.select('cart').subscribe(d =>{
      
      keys = Object.keys(d);
      console.log(keys)
      for (let n of keys){
        
        console.log(d[n])
        total = total + d[n]['price'];
        
      }
    });
    this.priceTotal = total
  }

  deleteItem(data: cartCatalog) {

   let id: string;
   id = data['imgId'];
    this.store.dispatch(new DeleteItemAction(id));
    let total = 0;
    var keys = Object.keys(this.items);
    this.store.select('cart').subscribe(d =>{
      
      keys = Object.keys(d);
      console.log(keys)
      for (let n of keys){
        
        console.log(d[n])
        total = total + d[n]['price'];
        
      }
    });
    this.priceTotal = total
  }

  ngOnDestroy(): void{

    //this.igChangeSub.unsubscribe();
  }

}
