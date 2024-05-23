const LoginPageClass = require("../../../ul/pages/loginPage");
const AccountPageClass = require("../../../ul/pages/accountPage");
const HomePageClass = require("../../../ul/pages/homePage");
const searchResultClass = require("../../../ul/pages/searchResultPage");
const ProductPage = require("../../../ul/pages/productPage");
const CartPage = require("../../../ul/pages/cartPage");
const PaymentPage = require("../../../ul/pages/paymentPage");
describe("Smoke Test", () => {
  beforeEach(() => {
    cy.visit("https://web-playground.ultralesson.com/account/login");
  });
  it("Test happy paths", () => {
    const loginPage = LoginPageClass.getInstance();
    const accountPage = AccountPageClass.getInstance();
    const homePage = HomePageClass.getInstance();
    const searchPage = searchResultClass.getInstance();
    const productPage = ProductPage.getInstance();
    const cartPage = CartPage.getInstance();
    const paymentPage = PaymentPage.getInstance();

    loginPage.loginUser();
    accountPage.navigateToHomePage();
    cy.title().should("eq", "ul-web-playground");
    homePage.searchItem("Jeans\n");

    searchPage.checkNameOfItemListed("Jeans")
      .selectFirstItem();

    productPage
      .checkProductAvailability()
      .addProductToCart()
      .verifyProductAddedToCart()
      .goToCart();

    cartPage
      .verifyCartPage()
      .verifyProductNameInCart("Belted Jeans")
      .verifyPriceInCartPage("Rs. 299.6")
      .verifyQtyInCartPage(1)
      .checkoutProduct();

    paymentPage
      .verifyPaymentPage()
      .chooseCOD()
      .verifyProductInPaymentPage()
      .completeOrder()
      .veriyOrderCompletion()
      .goToHomePage();

    homePage.goToAccountPage();
    accountPage.userLogout();

  });
});
