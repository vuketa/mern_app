import React from "react";
import { useFilterContext } from "../context/filter_context";
import { GridView, ListView } from "../components";

const ProductList2 = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no product match your search...</h5>;
  }
  if(grid_view === false){
    return <ListView products={products} />
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList2;
