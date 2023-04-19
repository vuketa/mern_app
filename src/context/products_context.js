import React from "react";
import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/products_reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  SINGLE_LOADING,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS, 
} from "../actions";


const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  

  const fetchProducts = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios("/products/view1");
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCT_ERROR });
    }
  };

  const fetchSingleProducts = async (id) => {
    dispatch({ type: SINGLE_LOADING });
    try {
      const response = await axios(`/${id}`);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts("/products/view1");
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
