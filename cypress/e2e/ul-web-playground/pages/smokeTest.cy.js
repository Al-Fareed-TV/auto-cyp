const {
  loginUser,
} = require("../../../ul/pages/loginPage");

const {
  navigateToHomePage,
  userLogout,
} = require("../../../ul/pages/accountPage");

const { searchItem, goToAccountPage } = require("../../../ul/pages/homePage");

const {
  selectFirstItem,
  checkNameOfItemListed,
} = require("../../../ul/pages/searchResultPage");

const {
  checkProductAvailability,
  addProductToCart,
  verifyProductAddedToCart,
  goToCart,
} = require("../../../ul/pages/productPage");

const {
  verifyCartPage,
  verifyProductNameInCart,
  verifyPriceInCartPage,
  verifyQtyInCartPage,
  checkoutProduct,
} = require("../../../ul/pages/cartPage");

const {
  verifyPaymentPage,
  chooseCOD,
  verifyProductInPaymentPage,
  completeOrder,
  verifyOrderCompletion,
  goToHomePage,
} = require("../../../ul/pages/paymentPage");

import data from "../../../ul/config/data.json";

describe("Smoke Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Test happy paths", () => {
    goToAccountPage();
    loginUser();
    navigateToHomePage();
    cy.title().should("eq", data.homepage.title);
    searchItem(data.homepage.searchItem);

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

    goToAccountPage();
    userLogout();
  });
});