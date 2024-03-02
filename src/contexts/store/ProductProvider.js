import { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (product) => {
    setProducts((prevProd) => {
        product.id = new Date();
        return [...prevProd, product];
    });
  };

  const cartContext = {
    items: products,
    addProduct: addProductHandler,
  };

  return (
    <ProductContext.Provider value={cartContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
