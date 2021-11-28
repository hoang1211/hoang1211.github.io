import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getProductsById } from "../db/product";
import { getCoupons } from "../db/coupons";

const cartSlice = createSlice({
  name: "cart",
  initialState: { coupon: null, item: [] },
  reducers: {
    addItem(state, action) {
      const item = state.item.find(
        (item) => item.product.id == action.payload.productId
      );
      if (item) {
        item.quantity++;
        return;
      }
      const product = getProductsById(action.payload.productId);

      if (product)
        state.item.push({
          product,
          quantity: 1,
        });
    },
    addItemByAmount(state, action) {
      const item = state.item.find(
        (item) => item.product.id == action.payload.productId
      );
      if (item) {
        item.quantity += action.payload.amount;
        return;
      }
      const product = getProductsById(action.payload.productId);
      if (product)
        state.item.push({
          product,
          quantity: action.payload.amount,
        });
    },
    clear(state, action) {
      state.coupon = null;
      state.item = [];
    },
    increment(state, action) {
      const item = state.item.find(
        (item) => item.product.id == action.payload.productId
      );
      item.quantity++;
    },
    decrement(state, action) {
      const item = state.item.find(
        (item) => item.product.id == action.payload.productId
      );
      if (item.quantity > 1) {
        item.quantity - 1;
      }
    },
    remove(state, action) {
      state.items = state.items.filter(
        (i) => i.product.id != action.payload.productId
      );
    },
    addCoupon(state, action) {
      const cp = getCoupons(action.payload.code);
      if (cp) state.coupon = cp;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  addItemByAmount,
  clear,
  increment,
  decrement,
  remove,
  addCoupon,
} = cartSlice.actions;

const selectItems = (state) => state.cart.items;
export const selectCoupons = (state) => state.cart.coupon;

export const selectTotalItem = createSelector(selectItems, (items) =>
  items.reduce((total, item) => (total += item.quantity), 0)
);
export const selectSubTotal = createSelector(selectItems, (item) =>
  item.reduce((total, it) => (total += it.product.price * it.quantity))
);
export const selectTotal = createSelector(
  selectSubTotal,
  selectCoupons,
  (subTotal, coupon) => {
    if (coupon) {
      const value = subTotal - coupon.discount;
      return value > 0 ? value : 0;
    } else {
      return subTotal;
    }
  }
);
