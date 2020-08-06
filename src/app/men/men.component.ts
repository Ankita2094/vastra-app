import { Component, OnInit, ViewChild } from '@angular/core';
import {CatalogserviceService} from "../services/catalogservice.service";
import { ActivatedRoute,Params, NavigationEnd, RouteReuseStrategy,Router } from '@angular/router';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import {  MenuEventArgs  } from '@syncfusion/ej2-angular-splitbuttons';
import { CartService } from '../services/cart.service';
import { AppState} from '../shared/app-state.model';
import {ClothesCatalog} from '../shared/clothesCatalog.model';
import {cartCatalog} from '../shared/clothes-list.model';
import {WishList} from '../shared/wishlist-list.model';
import {LoadItemAction,ResetStateAction,AddToCartAction, AddToWishlistAction} from '../shared/actions';
import {Observable} from 'rxjs';
import {Store,State} from '@ngrx/store';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
 
  items: Observable<Array<ClothesCatalog>>;
  size: string;


 public wearTypeOutput : any[];
  type:string;
  Images : string[];
  mySubscription: any;
  cartProduct: Observable<cartCatalog>;
  constructor(private store: Store<AppState>,private myService: CatalogserviceService,private route: ActivatedRoute, private router: Router,public cartservice :CartService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
   }

  ngOnInit(): void {
    this.items = this.store.select(store => store.shopping);
    //console.log("Initial State");
    //console.log(this.items);
    this.route.params.subscribe(
      (params: Params)=> {
          this.type = history.state.data;
          this.myService.getType(this.type).subscribe( (catalog: Array<ClothesCatalog>) =>
             {
              //console.log("keys........")
              //console.log(Object.keys(catalog));
              this.store.dispatch(new ResetStateAction());
              for(let i of Object.keys(catalog)){
                this.store.dispatch(new LoadItemAction(catalog[i]));
              }
              
              this.items = this.store.select(store => store.shopping);
              let temparr = new Array();
              temparr.push(catalog.valueOf());
              //console.log(temparr);
             
              //console.log("idhar print karuga")
              this.wearTypeOutput = catalog;
              this.store.select('shopping').subscribe(data =>{console.log(data)})
             // console.log();
              
              },
              
            );
         
          
      }
  );
  
    
  }


  onproductClick(event: any){

    this.router.navigate(['men/productview'],{state: {data: event}});
    

  }

  addtoCart(data : any){

    if(this.size !== undefined && this.size !== ""){
      
      
    
    console.log(this.size);
    console.log(Object.keys(data));
    let newData = {
      color: data['color'],
      imgId: data['imgId'],
      wear_type: data['wear_type'],
      price: data['price'],
      titleName: data['titleName'],
      uniqueId: data['uniqueId'],
      totalCount: data['totalCount'],
      size : this.size
  

    }
    console.log(newData)
    let temparr = new Array();
   
    this.store.dispatch(new AddToCartAction(newData));
    this.size = "";
    this.store.select('cart').subscribe(d =>{console.log(d)})
    
  }

  else{
    alert("please select size");
  }
    
  }

  clickSize(event: any){
    let temp = event.target.textContent;
   this.size = temp;
   console.log(this.size);
   temp = "";
    
  }

  addtoWishlist(data : any){
    if(this.size !== undefined && this.size !== ""){
      
    
    // console.log(typeof(this.size));
    // console.log(this.size);
    // console.log(Object.keys(data));
    let newData = {
      color: data['color'],
      imgId: data['imgId'],
      wear_type: data['wear_type'],
      price: data['price'],
      titleName: data['titleName'],
      uniqueId: data['uniqueId'],
      totalCount: data['totalCount'],
      size : this.size
  

    }
    console.log(newData)
    let temparr = new Array();
   
    this.store.dispatch(new AddToWishlistAction(newData));
    this.size = "";
    this.store.select('wishlist').subscribe(d =>{console.log(d)})
  }

  else{
    alert("Select Size");
  }
    
  }

  ngOnDestroy() {
    this.size = "";
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
      this.wearTypeOutput = null;
    }
  }



}

// Imp:
// https://www.bennadel.com/blog/3533-using-router-events-to-detect-back-and-forward-browser-navigation-in-angular-7-0-4.htm
