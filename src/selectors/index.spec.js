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
              picture: "http://lorempixel.com/400/200/technics/"
            },
            {
              id: 5,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 21.35,
              quantity: 0,
              picture: "http://lorempixel.com/400/200/technics/"
            },
            {
              id: 6,
              title: "Smartphone Motorola Moto G6 Dual Chip ",
              description: "",
              price: 25,
              quantity: 117,
              picture: "http://lorempixel.com/400/200/technics/"
            }
          ]
        }
      }
    };

    it("should produce cart items based on state `cart` object", () => {
      expect(getCartItems(state)).toEqual([
        {
          id: 4,
          title: "Smartphone Motorola Moto G6 Dual Chip ",
          description: "",
          quantity: 1,
          price: 22,
          quantity: 52,
          picture: "http://lorempixel.com/400/200/technics/"
        },
        {
          id: 6,
          title: "Smartphone Motorola Moto G6 Dual Chip ",
          description: "",
          quantity: 3,
          price: 25,
          quantity: 117,
          picture: "http://lorempixel.com/400/200/technics/"
        }
      ]);
    });

    it("should calculate cart items total price", () => {
      expect(getTotalPrice(state)).toEqual(97.00);
    });
  });
});
