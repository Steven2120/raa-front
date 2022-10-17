export const addOneToCartItems = (cart) => {
  return {
    ...cart,
    items: cart.items + 1,
  };
};

export const addToCartTotal = (cart, action) => {
  return {
    ...cart,
    total: cart.total + action.payload.price,
  };
};

export const addOneToProductCount = (productsArr, action) => {
  const productFound = productsArr.find(
    (product) => product.id === action.payload.id
  );
  if (productFound) {
    return productsArr.map((product) => {
      if (product.id === action.payload.id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
  }
  return [...productsArr, { ...action.payload, count: 1 }];
};

export const multiplyProductCountByPrice = (productsArr, action) => {
  return productsArr.map((product) => {
    if (product.id === action.payload.id) {
      return {
        ...product,
        total: product.price * product.count,
      };
    }
    return product;
  });
};

export const removeOneFromCartItems = (cart) => {
  return {
    ...cart,
    items: cart.items - 1,
  };
};

export const subtractFromCartTotal = (cart, action) => {
  return {
    ...cart,
    total: cart.total - action.payload.price,
  };
};

export const decrementOneFromProductCount = (productsArr, action) => {
  return productsArr.map((product) => {
    if (product.id === action.payload.id) {
      return { ...product, count: action.payload.count - 1 };
    }
    return product;
  });
};

export const subtractItemsFromCartItems = (cart, action) => {
  return { ...cart, items: cart.items - action.payload.count };
};

export const subtractItemsPriceFromCartTotal = (cart, action) => {
  return {
    ...cart,
    total: cart.total - action.payload.count * action.payload.price,
  };
};

export const removeItemFromProductArray = (productsArr, action) => {
  return productsArr.filter((product) => product.id !== action.payload.id);
};

export const cartInitialState = {
  products: [],
  items: 0,
  total: 0,
};
