import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return <div>Cart page</div>;
};

export default Cart;
