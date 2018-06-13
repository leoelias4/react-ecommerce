import fetch from "isomorphic-fetch";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";
import * as Actions from "../constants";
import {
  getProductInfo,
  productsFetching,
  productsFetched
} from "./productsActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe("Cart Actions", () => {
  const store = mockStore({});
  it("should execute fetch data", () => {
    store.clearActions();
    nock("http://www.mocky.io/v2/5b214f0230000091265c743c")
      .reply(200, 1);
    const expectedActions = [
      { type: Actions.PRODUCT_INFO_FETCHING },
      {
        payload: 1,
        type: Actions.PRODUCT_INFO_FETCHED
      }
    ];
    return store.dispatch(getProductInfo()).then(() => {
      expect(store.getActions().length).toBe(2);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should execute fetch failure request", () => {
    store.clearActions();
    nock("http://www.mocky.io/v2/5b214f0230000091265c743c")
      .reply(500, 1);
    const expectedActions = [
      { type: Actions.PRODUCT_INFO_FETCHING },
      {
        payload: "error",
        type: Actions.PRODUCT_INFO_FAILED
      }
    ];
    return store.dispatch(getProductInfo()).then(() => {
      expect(store.getActions().length).toBe(2);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
