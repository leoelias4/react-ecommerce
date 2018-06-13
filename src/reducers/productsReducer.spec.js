import products from "./productsReducer";
import * as Actions from "../constants";

describe("reducers", () => {
  describe("product", () => {
    const initialState = {
      readyState: Actions.PRODUCT_INFO_INVALID,
      result: null
    };
    const state = {
      result: {
        products: [
          {
            id: 4,
            title: "Smartphone Motorola Moto G6 Dual Chip ",
            description: "",
            price: 22,
            quantity: 53,
            picture: "http://lorempixel.com/400/200/technics/",
            memory: "32GB",
            brand: "Motorola",
            chipType: "Nano Chip",
          },
          {
            id: 5,
            title: "Smartphone Motorola Moto G6 Dual Chip ",
            description: "",
            price: 21.35,
            quantity: 0,
            picture: "http://lorempixel.com/400/200/technics/",
            memory: "32GB",
            brand: "Motorola",
            chipType: "Nano Chip",
          }
        ]
      }
    };

    it("should provide the initial state", () => {
      expect(products(undefined, {})).toEqual(initialState);
    });

    it("should handle fetching state", () => {
      expect(
        products(initialState, {
          type: Actions.PRODUCT_INFO_FETCHING
        })
      ).toEqual({
        readyState: Actions.PRODUCT_INFO_FETCHING,
        result: null
      });
    });

    it("should handle detch failed state", () => {
      expect(
        products(initialState, {
          type: Actions.PRODUCT_INFO_FAILED
        })
      ).toEqual({
        readyState: Actions.PRODUCT_INFO_FAILED,
        result: undefined
      });
    });

    it("should handle detch failed state", () => {
      expect(
        products(initialState, {
          type: Actions.PRODUCT_INFO_FETCHED
        })
      ).toEqual({
        readyState: Actions.PRODUCT_INFO_FETCHED,
        result: undefined
      });
    });

    it("should handle CARD_ADD action", () => {
      expect(products(state, {
        type: Actions.CARD_ADD,
        payload: 4
      })).toEqual({
        result: {
          products: [
            {
              id: 4,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 22,
              quantity: 52,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            },
            {
              id: 5,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 21.35,
              quantity: 0,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            }
          ]
        }
      });
    });

    it("should handle CARD_ADD action when the product doesn't exist", () => {
      expect(products(state, {
        type: Actions.CARD_ADD,
        payload: 12
      })).toEqual(
        state
      );
    });

    it("should handle CARD_REMOVE action", () => {
      expect(
        products(state, {
          type: Actions.CARD_REMOVE,
          payload: 5
        })
      ).toEqual({
        result: {
          products: [
            {
              id: 4,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 22,
              quantity: 52,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            },
            {
              id: 5,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 21.35,
              quantity: 1,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            }
          ]
        }
      });
    });

    it("should handle CARD_REMOVE action when the product doesn't exist", () => {
      expect(
        products(state, {
          type: Actions.CARD_REMOVE,
          payload: 12
        })
      ).toEqual(state);
    });

    it("should handle CARD_DESTROY_ITEM action", () => {
      expect(
        products(state, {
          type: Actions.CARD_DESTROY_ITEM,
          payload: {
            id: 4,
            quantity: 4
          }
        })
      ).toEqual({
        result: {
          products: [
            {
              id: 4,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 22,
              quantity: 56,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            },
            {
              id: 5,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 21.35,
              quantity: 1,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            }
          ]
        }
      });
    });

    it("should handle CARD_DESTROY_ITEM action when the product doesn't exist", () => {
      expect(
        products(state, {
          type: Actions.CARD_DESTROY_ITEM,
          payload: {
            id: 12
          }
        })
      ).toEqual(state);
    });
  });
});
