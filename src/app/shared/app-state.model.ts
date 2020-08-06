import { ClothesCatalog } from './clothesCatalog.model';
import { cartCatalog } from './clothes-list.model';
import { WishList } from './wishlist-list.model';

export interface AppState {
  readonly shopping: Array<ClothesCatalog>;
  readonly cart: Array<cartCatalog>;
  readonly wishlist: Array<WishList>;
}