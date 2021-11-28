import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { selectTotalItem } from "./slices/cart.slice";

import {
  addItem,
  addItemByAmount,
  clear,
  increment,
  decrement,
  addCoupon,
  selectCoupons,
  selectTotal,
  selectSubTotal,
  selectTotalItem,
} from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

store.dispatch(addItem({ productId: 1 }));
store.dispatch(addItem({ productId: 2 }));
store.dispatch(addItem({ productId: 1 }));

store.dispatch(addItemByAmount({ productId: 3, amount: 2 }));
store.dispatch(addItemByAmount({ productId: 1, amount: 3 }));

store.dispatch(clear());

store.dispatch(addItem({ productId: 1 }));
store.dispatch(increment({ productId: 1 }));
store.dispatch(decrement({ productId: 1 }));
store.dispatch(decrement({ productId: 1 }));

store.dispatch(addCoupon({ code: "FREESHIP" }));
