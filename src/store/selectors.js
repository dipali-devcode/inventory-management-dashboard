// selectors.js
export const selectFilteredProducts = (state) => {
  const products = state.products.items || [];
  const searchQuery = state.search.searchQuery || "";

  if (!searchQuery.trim()) {
    return products;
  }

  const lowerQuery = searchQuery.toLowerCase();

  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery),
  );
};
