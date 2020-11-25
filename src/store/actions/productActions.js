import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../types";

export function fetchProducts(data) {
  return (dispatch) =>
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
}

export function filterProducts(products, size) {
  return {
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  };
}

export function sortProducts(filteredProducts, sort) {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  };
}
