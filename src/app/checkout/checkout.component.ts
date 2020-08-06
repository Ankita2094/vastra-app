import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cartCatalog } from '../shared/clothes-list.model';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/app-state.model';
import { DeleteAllAction } from '../shared/actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Observable<Array<cartCatalog>>;
  priceTotal : number;
  length : number;
  flag = false;
  constructor(private store: Store<AppState>,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.items = this.store.select("cart");
    var keys = Object.keys(this.items);
    console.log("cart of checkout")
    let total = 0;
    this.store.select('cart').subscribe(d =>{this.length = d['length']});
    let cloths = new Array();
    this.store.select('cart').subscribe(d =>{
      
      keys = Object.keys(d);
      console.log(keys)
      for (let n of keys){
        
        console.log(d[n])
        total = total + d[n]['price'];
        
      }
    });
    this.priceTotal = total

    if(this.priceTotal == 0){
      this.flag = false;
      alert("Cart Empty Cannot Checkout");
      this.router.navigate(['/home']);
    }
    
    
    // for( var i of keys){
    //   total = total + this.items[i]['price'];
    // }
    // this.priceTotal = total;
    // console.log(this.priceTotal);

  }


  emptyCart(){
    this.store.dispatch(new DeleteAllAction());
    alert("Your Order is Successful!!");
    this.router.navigate(['/home']);
  }

}
