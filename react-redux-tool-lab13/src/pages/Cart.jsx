import { useSelector } from "react-redux";
import {
  selectCoupons,
  selectSubTotal,
  selectTotalItem,
  selectTotal,
  selectCoupons,
} from "../slices/cart.slice";

const Cart = () => {
  const coupon = useSelector(selectCoupons);
  const subTotal = useSelector(selectSubTotal);
  const total = useSelector(selectTotal);
  const totalItem = useSelector(selectTotalItem);

  return <div>Cart</div>;
};
export default Cart;
