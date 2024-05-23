import locators from "../config/locators.json";
class cartPage {
  static instance;

  constructor() {
    if (cartPage.instance) {
      throw new Error(
        "Use cartPage.getInstance() to get the single instance of this class."
      );
    }
    cartPage.instance = this;
  }

  static getInstance() {
    if (!cartPage.instance) {
      cartPage.instance = new cartPage();
    }
    return cartPage.instance;
  }
  verifyCartPage() {
    cy.title().should("eq", "Your Shopping Cart – ul-web-playground");
    cy.contains("Your cart");
    return this;
  }
  verifyProductNameInCart(text) {
    cy.get(locators.cartpage.cartItemName)
      .invoke("text")
      .then((text) => {
        expect(text).to.exist;
      });
    return this;
  }
  verifyPriceInCartPage(price) {
    cy.get(locators.cartpage.cartItemPrice)
      .invoke("text")
      .then((price) => {
        expect(price).to.exist;
      });
    return this;
  }
  verifyQtyInCartPage(qty) {
    cy.get(locators.cartpage.cartItemQty)
      .invoke("val")
      .then((qty) => {
        expect(qty).to.exist;
      });
    return this;
  }
  checkoutProduct() {
    cy.get(locators.cartpage.checkoutButton).click();
  }
}
module.exports = cartPage;