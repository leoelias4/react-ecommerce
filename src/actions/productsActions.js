import fetch from "isomorphic-fetch";
import * as Actions from "../constants";
import utils from "../utils"

export const getProductInfo = () => dispatch => {
  dispatch(productsFetching());
  return fetch("https://www.mocky.io/v2/5b214f0230000091265c743c")
    .then(res => {
      if (res.status !== 200) dispatch(productsFetchFailed("error"));
      else return res.json();
    })
    .then(res => {
      let removeDuplicates = utils.removeDuplicatesBy(function(x) { return x.id; }, res);
      if (res) dispatch(productsFetched(removeDuplicates));
    })
    .catch(err => {
      dispatch(productsFetchFailed(err));
    });
};

export const productsFetching = () => ({
  type: Actions.PRODUCT_INFO_FETCHING
});

export const productsFetched = res => ({
  type: Actions.PRODUCT_INFO_FETCHED,
  payload: res
});

export const productsFetchFailed = err => ({
  type: Actions.PRODUCT_INFO_FAILED,
  payload: err
});