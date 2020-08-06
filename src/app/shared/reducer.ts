import { ShoppingActionTypes, ShoppingAction } from './actions';
import { ClothesCatalog } from './clothesCatalog.model';
import { cartCatalog } from './clothes-list.model';
import { WishList } from './wishlist-list.model';
import { Item } from '@syncfusion/ej2-angular-splitbuttons';

const initialState: Array<ClothesCatalog> = [

];
const cartInitialState: Array<cartCatalog> = [
   
    ];
    const wishlistInitialState: Array<WishList> = [
   
    ];

export function ShoppingReducer(state: Array<ClothesCatalog> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_ITEM:
      return [...state, action.payload];

    case ShoppingActionTypes.RESET_STATE:
        return [];

    default:
      return state;
  }
}

export function cartReducer(cartState: Array<cartCatalog> = cartInitialState, action: ShoppingAction) {
    switch (action.type) {
      case ShoppingActionTypes.ADD_TO_CART:
          return [...cartState, action.payload];

          case ShoppingActionTypes.DELETE_ITEM:
            return cartState.filter(item => item.imgId !== action.payload);
          
            case ShoppingActionTypes.DELETE_ALL:
              return cartInitialState;
  
      default:
        return cartState;
    }
  }


  export function wishlistReducer(wishState: Array<WishList> = wishlistInitialState, action: ShoppingAction) {
    switch (action.type) {
      case ShoppingActionTypes.ADD_TO_WISHLIST:
          return [...wishState, action.payload];

          case ShoppingActionTypes.DELETE_FROM_WISHLIST:
            return wishState.filter(item => item.imgId !== action.payload);
  
      default:
        return wishState;
    }
  }