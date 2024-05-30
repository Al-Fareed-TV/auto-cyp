const LoginPageClass = require("../../../ul/pages/loginPage");
const AccountPageClass = require("../../../ul/pages/accountPage");
const HomePageClass = require("../../../ul/pages/homePage");
const searchResultClass = require("../../../ul/pages/searchResultPage");
const ProductPage = require("../../../ul/pages/productPage");
const CartPage = require("../../../ul/pages/cartPage");
const PaymentPage = require("../../../ul/pages/paymentPage");
import data from "../../../ul/config/data.json";
describe("Smoke Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });
  it("Test happy paths", () => {
    const loginPage = LoginPageClass.getInstance();
    const accountPage = AccountPageClass.getInstance();
    const homePage = HomePageClass.getInstance();
    const searchPage = searchResultClass.getInstance();
    const productPage = ProductPage.getInstance();
    const cartPage = CartPage.getInstance();
    const paymentPage = PaymentPage.getInstance();

    homePage.goToAccountPage();
    loginPage.loginUser();
    accountPage.navigateToHomePage();
    cy.title().should("eq", data.homepage.title);
    homePage.searchItem(data.homepage.searchItem);

    searchPage
      .checkNameOfItemListed(data.homepage.searchItem)
      .selectFirstItem();

    productPage
      .checkProductAvailability()
      .addProductToCart()
      .verifyProductAddedToCart()
      .goToCart();

    cartPage
      .verifyCartPage(data.cartpage.title)
      .verifyProductNameInCart(data.cartpage.ProductNameInCart)
      .verifyPriceInCartPage(data.cartpage.ProductPriceInCart)
      .verifyQtyInCartPage(data.cartpage.ProductQtyInCart)
      .checkoutProduct();

    paymentPage
      .verifyPaymentPage(data.paymentpage.title)
      .chooseCOD()
      .verifyProductInPaymentPage(
        data.paymentpage.productQty,
        data.paymentpage.productPrice,
        data.paymentpage.totalPrice
      )
      .completeOrder()
      .veriyOrderCompletion(data.paymentpage.orderSuccessMessage)
      .goToHomePage();

    homePage.goToAccountPage();
    accountPage.userLogout();

  });
});
