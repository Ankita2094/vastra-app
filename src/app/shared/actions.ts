import { Action } from '@ngrx/store';
import { ClothesCatalog } from './clothesCatalog.model';
import { cartCatalog } from './clothes-list.model';
import { WishList } from './wishlist-list.model';

export enum ShoppingActionTypes {
  LOAD_ITEM = '[SHOPPING] LOAD Item',
  RESET_STATE = '[SHOPPING] RESET State',
  ADD_TO_CART = '[SHOPPING] ADD To Cart',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ALL = '[SHOPPING] Delete All',
  ADD_TO_WISHLIST = '[SHOPPING] ADD To Wishlist',
  DELETE_FROM_WISHLIST = '[SHOPPING] Delete From Wishlist'
}

export class LoadItemAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM

  constructor(public payload: ClothesCatalog) { }
}



export class ResetStateAction implements Action {
    readonly type = ShoppingActionTypes.RESET_STATE
  
    constructor() { }
  }
  export class AddToCartAction implements Action {
     type = ShoppingActionTypes.ADD_TO_CART
  
    constructor(public payload: cartCatalog) { }
  }


  export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM
  
    constructor(public payload: string) { }
  }

  export class DeleteAllAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ALL
  
    constructor() { }
  }


  export class AddToWishlistAction implements Action {
    type = ShoppingActionTypes.ADD_TO_WISHLIST
 
   constructor(public payload: WishList) { }
 }


 export class DeleteFromWishlistAction implements Action {
   readonly type = ShoppingActionTypes.DELETE_FROM_WISHLIST
 
   constructor(public payload: string) { }
 }

  export type ShoppingAction = LoadItemAction | ResetStateAction | AddToCartAction | DeleteItemAction | AddToWishlistAction | DeleteFromWishlistAction | DeleteAllAction
  




  // https://developer.school/introduction-to-ngrx-store/