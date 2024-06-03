export const getFirstItemListed = () => {
  return "#product-grid > ul > li:nth-child(1)";
};

export const getFirstItemListedName = () => {
  return "#product-grid > ul > li:nth-child(1) > div > div.card-information > div > h3 > a";
};
