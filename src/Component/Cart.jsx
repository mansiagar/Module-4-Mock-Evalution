import { useSelector } from "react-redux";
import { Button, Image, Text } from "@chakra-ui/react";
import "../style/product.css";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  const handleRemove = (item) => {
    console.log(item);
  };

  console.log(cart, "cart Item");
  return (
    <div>
      <div className="product_container">
        {cart.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="img">
                <Image src={item.image}></Image>
              </div>
              <h1>{item.title}</h1>
              <Text>{item.price}</Text>
              <Button onClick={() => handleRemove(item)}>Remove</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
