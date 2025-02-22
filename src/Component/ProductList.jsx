import { fetch } from "@/redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());
  }, []);
  return <div>This is Product list</div>;
};

export default ProductList;
