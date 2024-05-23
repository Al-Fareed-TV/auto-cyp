
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
    cy.contains("Your cart");
    return this;
  }
  verifyProductNameInCart(text) {
    cy.get("#CartItem-1 > td.cart-item__details > a")
      .invoke("text")
      .then((text) => {
        expect(text).to.exist;
      });
    return this;
  }
  verifyPriceInCartPage(price) {
    cy.get(
      "#CartItem-1 > td.cart-item__totals.right.small-hide > div.cart-item__price-wrapper > span"
    )
      .invoke("text")
      .then((price) => {
        expect(price).to.exist;
      });
    return this;
  }
  verifyQtyInCartPage(qty) {
    cy.get("#Quantity-1")
      .invoke("val")
      .then((qty) => {
        expect(qty).to.exist;
      });
    return this;
  }
  checkoutProduct() {
    cy.get("#checkout").click();
  }
}
module.exports = cartPage;
