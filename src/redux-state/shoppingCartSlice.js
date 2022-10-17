import { createSlice } from "@reduxjs/toolkit";
import {
  addOneToCartItems,
  addToCartTotal,
  addOneToProductCount,
  multiplyProductCountByPrice,
  removeOneFromCartItems,
  subtractFromCartTotal,
  decrementOneFromProductCount,
  subtractItemsFromCartItems,
  subtractItemsPriceFromCartTotal,
  removeItemFromProductArray,
  cartInitialState,
} from "./shoppingCartHelpers";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const updateCartItems = addOneToCartItems(state);

      const updateCartTotal = addToCartTotal(updateCartItems, action);

      const updateProductCount = addOneToProductCount(
        updateCartTotal.products,
        action
      );

      const updateProductTotal = multiplyProductCountByPrice(
        updateProductCount,
        action
      );
      return { ...updateCartTotal, products: updateProductTotal };
    },
    removeFromCart: (state, action) => {
      const updateCartItems = removeOneFromCartItems(state);
      // subtract from cart total
      const updateCartTotal = subtractFromCartTotal(updateCartItems, action);

      const updateProductCount = decrementOneFromProductCount(
        updateCartTotal.products,
        action
      );

      const updateProductTotal = multiplyProductCountByPrice(
        updateProductCount,
        action
      );
      return { ...updateCartTotal, products: updateProductTotal };
    },
    deleteItemFromCart: (state, action) => {
      const updateCartItems = subtractItemsFromCartItems(state, action);

      const updateCartTotal = subtractItemsPriceFromCartTotal(
        updateCartItems,
        action
      );

      const updateProductArray = removeItemFromProductArray(
        updateCartTotal.products,
        action
      );
      return { ...updateCartTotal, products: updateProductArray };
    },
    emptyCart: () => {
      return cartInitialState;
    },
  },
});

export const { addToCart, removeFromCart, deleteItemFromCart, emptyCart } =
  shoppingCartSlice.actions;
export const { reducer: shoppingCartReducer } = shoppingCartSlice;
