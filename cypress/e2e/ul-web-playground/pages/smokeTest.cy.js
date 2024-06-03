
const {
  selectFirstItem,
  checkNameOfItemListed,
} = require("../../../support/ul/pages/SearchResultPage/searchResultPage");

const {
  checkProductAvailability,
  addProductToCart,
  verifyProductAddedToCart,
  goToCart,
} = require("../../../support/ul/pages/ProductPage/productPage");

const {
  verifyCartPage,
  verifyProductNameInCart,
  verifyPriceInCartPage,
  verifyQtyInCartPage,
  checkoutProduct,
} = require("../../../support/ul/pages/CartPage/cartPage");

const {
  verifyPaymentPage,
  chooseCOD,
  verifyProductInPaymentPage,
  completeOrder,
  verifyOrderCompletion,
  goToHomePage,
} = require("../../../support/ul/pages/PaymentPage/paymentPage");

import data from "../../../support/ul/config/data.json";

describe("Search for a product and place order", () => {
  it("Verify user is able to search and place order", () => {
    
    cy.searchProduct(data.homepage.searchItem);

    checkNameOfItemListed(data.homepage.searchItem);
    selectFirstItem();

    checkProductAvailability();
    addProductToCart();
    verifyProductAddedToCart();
    goToCart();

    verifyCartPage(data.cartpage.title);
    verifyProductNameInCart(data.cartpage.ProductNameInCart);
    verifyPriceInCartPage(data.cartpage.ProductPriceInCart);
    verifyQtyInCartPage(data.cartpage.ProductQtyInCart);
    checkoutProduct();

    verifyPaymentPage(data.paymentpage.title);
    chooseCOD();
    verifyProductInPaymentPage(
      data.paymentpage.productQty,
      data.paymentpage.productPrice,
      data.paymentpage.totalPrice
    );
    completeOrder();
    verifyOrderCompletion(data.paymentpage.orderSuccessMessage);
    goToHomePage();

    cy.logout();

  });
});
