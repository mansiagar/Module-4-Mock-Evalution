import { addToCart, fetch } from "@/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/product.css";
import { Button, Image, Text } from "@chakra-ui/react";
const ProductList = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const handleCart = (product) => {
    console.log(product, "in product list data");
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div className="product_container">
        {loading && <h1>loading.....</h1>}
        {error && <h1>Error....</h1>}
        {product.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="img">
                <Image src={item.image}></Image>
              </div>
              <h1>{item.title}</h1>
              <Text>{item.price}</Text>
              <Button onClick={() => handleCart(item)}>Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
