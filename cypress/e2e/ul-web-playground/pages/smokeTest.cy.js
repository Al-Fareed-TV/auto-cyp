
const {
  selectFirstItem,
  checkNameOfItemListed,
} = require("../../../support/ul/components/SearchResult/searchResultPage");

const {
  checkProductAvailability,
  addProductToCart,
  verifyProductAddedToCart,
  goToCart,
} = require("../../../support/ul/components/Product/product");

const {
  verifyCartPage,
  verifyProductNameInCart,
  verifyPriceInCartPage,
  verifyQtyInCartPage,
  checkoutProduct,
} = require("../../../support/ul/components/Cart/cart");

const {
  verifyPaymentPage,
  chooseCOD,
  verifyProductInPaymentPage,
  completeOrder,
  verifyOrderCompletion,
  goToHomePage,
} = require("../../../support/ul/components/Payment/payment");

// import data from "../../../support/ul/config/data.json";

describe("Search for a product and place order", () => {
  it("Verify user is able to search and place order", () => {
    const data = cy.fixtures('data')
    cy.searchProduct(data.homePage.searchItem);

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
