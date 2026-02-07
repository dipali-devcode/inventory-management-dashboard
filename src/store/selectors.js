import { createSelector } from "@reduxjs/toolkit";

const selectProducts = (state) => state.products.items || [];
const selectSearchQuery = (state) => state.search.searchQuery || "";

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchQuery],
  (products, searchQuery) => {
    if (!searchQuery.trim()) {
      return products;
    }

    const lowerQuery = searchQuery.toLowerCase();

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery),
    );
  },
);
