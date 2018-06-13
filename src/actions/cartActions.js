import * as Actions from "../constants";

export const addToCart = id => (dispatch, getState) => {
  const productObj = getState().productInfo.result.products.find(
    s => s.id === id
  );
  dispatch({
    type: Actions.CARD_ADD,
    payload: productObj.quantity > 0 ? id : null
  });
};

export const removeFromCart = id => dispatch => {
  dispatch({
    type: Actions.CARD_REMOVE,
    payload: id
  });
};

export const destroyItem = (id, quantity) => dispatch => {
  dispatch({
    type: Actions.CARD_DESTROY_ITEM,
    payload: {
      id,
      quantity
    }
  });
};
