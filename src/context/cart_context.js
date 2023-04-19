import React, {  createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (_id , amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { _id, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const clearItem = () => {
    dispatch({type: CLEAR_CART})
  };
  const toggleAmount = (id, value) => {
    console.log(id, value);
    dispatch({type: TOGGLE_CART_ITEM_AMOUNT, payload:{id, value}})
  };
  useEffect(() => {
    dispatch({type: COUNT_CART_TOTALS})
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearItem, removeItem, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
