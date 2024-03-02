import React from "react";


const ProductContext = React.createContext({
    items: [],
    addProduct: (product) => {},
});

export default ProductContext;