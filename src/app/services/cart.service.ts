import { Injectable, DefaultIterableDiffer } from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber, from} from 'rxjs';
import {MenComponent} from '../men/men.component';
import { ClothesCatalog } from '../shared/clothesCatalog.model';
import { newArray } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartProductChanged = new Subject<ClothesCatalog[]>();
  cartProduct:ClothesCatalog[] = [];
  temparr = new Array();
  constructor() {
    
   }

   getProducts(){
    

   
    return this.cartProduct.slice();
}
   
   public addToCart(cartProduct :ClothesCatalog[]) {
    
    this.cartProduct.push(...cartProduct);
        this.cartProductChanged.next(this.cartProduct.slice());


        // console.log("in Cart Service testing");
        // console.log(this.cartProduct);
        // console.log(this.cartProductChanged);
  }

  

  
}
