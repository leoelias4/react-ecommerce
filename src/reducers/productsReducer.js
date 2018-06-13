import * as Actions from "../constants";

const initialState = {
  readyState: Actions.PRODUCT_INFO_INVALID,
  result: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.PRODUCT_INFO_FETCHING:
      return {
        ...state,
        readyState: Actions.PRODUCT_INFO_FETCHING
      };
    case Actions.PRODUCT_INFO_FAILED:
      return {
        ...state,
        readyState: Actions.PRODUCT_INFO_FAILED,
        result: action.payload
      };
    case Actions.PRODUCT_INFO_FETCHED:
      const products = {}
      return {
        ...state,
        readyState: Actions.PRODUCT_INFO_FETCHED,
        result: action.payload
      };
    case Actions.CARD_ADD:
      const productObj1 = state.result.products.find(item => {
        if (item.id === action.payload) return item;
        return null;
      });
      if (productObj1) productObj1.quantity -= 1;
      return {
        ...state
      };
    case Actions.CARD_REMOVE:
      const productObj2 = state.result.products.find(item => {
        if (item.id === action.payload) return item;
        return null;
      });
      if (productObj2) productObj2.quantity += 1;
      return {
        ...state
      };
    case Actions.CARD_DESTROY_ITEM:
      const productObj3 = state.result.products.find(item => {
        if (item.id === action.payload.id) return item;
        return null;
      });
      if (productObj3) productObj3.quantity += action.payload.quantity;
      return {
        ...state
      };
    default:
      return state;
  }
};
