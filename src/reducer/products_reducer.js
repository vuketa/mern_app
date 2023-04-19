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

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === LOADING) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.product_amount === null
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === GET_PRODUCT_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === SINGLE_LOADING) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return {...state, single_product_loading: false, single_product: action.payload}
  }
  if(action.type === GET_SINGLE_PRODUCT_ERROR){
    return {...state, single_product_loading: false, single_product_error: true}
  }


  throw new Error(`No Matching "${action.type}" - action type`);
};
export default products_reducer;
