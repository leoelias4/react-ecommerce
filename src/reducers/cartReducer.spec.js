import cart from "./cartReducer";
import { getCartItems, getTotalPrice } from "../selectors";

describe("reducers", () => {
  describe("cart", () => {
    const initialState = {
      cart: {}
    };

    const state = {
      cart: {
        "4": 1,
        "6": 3
      },
      productInfo: {
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
            },
            {
              id: 6,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 25,
              quantity: 117,
              picture: "http://lorempixel.com/400/200/technics/",
              memory: "32GB",
              brand: "Motorola",
              chipType: "Nano Chip",
            }
          ]
        }
      }
    };

    it("should provide the initial state", () => {
      expect(cart(undefined, {})).toEqual(initialState.cart);
    });

    it("should handle CARD_ADD action", () => {
      expect(cart({}, {
        type: "CARD_ADD",
        payload: 1
      })).toEqual({
        1: 1
      });
      expect(cart({
        1: 1
      }, {
        type: "CARD_ADD",
        payload: 1
      })).toEqual({
        1: 2
      });
      expect(cart({
        1: 2,
        5: 4
      }, {
        type: "CARD_ADD",
        payload: 1
      })).toEqual({
        1: 3,
        5: 4
      });
    });

    it("should handle CARD_REMOVE action", () => {
      expect(cart({
        1: 1
      }, {
        type: "CARD_REMOVE",
        payload: 1
      })).toEqual({
        1: 0
      });
      expect(cart({
        1: 4,
        4: 5
      }, {
        type: "CARD_REMOVE",
        payload: 4
      })).toEqual(
        {
          1: 4,
          4: 4
        }
      );
    });

    it("should handle CARD_DESTROY_ITEM action", () => {
      expect(
        cart(
          {
            1: 10
          },
          {
            type: "CARD_DESTROY_ITEM",
            payload: {
              id: 1
            }
          }
        )
      ).toEqual({});
      expect(
        cart(
          {
            1: 10,
            5: 8
          },
          {
            type: "CARD_DESTROY_ITEM",
            payload: {
              id: 5
            }
          }
        )
      ).toEqual({
        1: 10
      });
    });
  });
});
