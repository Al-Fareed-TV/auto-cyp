import locators from "../config/locators.json";
class productPage {
  static instance;

  constructor() {
    if (productPage.instance) {
      throw new Error(
        "Use productPage.getInstance() to get the single instance of this class."
      );
    }
    productPage.instance = this;
  }

  static getInstance() {
    if (!productPage.instance) {
      productPage.instance = new productPage();
    }
    return productPage.instance;
  }
  checkProductAvailability() {
    cy.get(locators.productpage.addToCartButton).should("be.visible");
    cy.get(locators.productpage.buyNowButton).should("be.visible");
    return this;
  }
  changeQty(qty) {
    cy.get(locators.productpage.qtyElement).type(qty);
    return this;
  }
  addProductToCart() {
    cy.get(locators.productpage.addToCartButton).click();
    return this;
  }
  verifyProductAddedToCart() {
    cy.contains(locators.productpage.productAddedMessage).should("be.visible");
    cy.get(locators.productpage.cartButton).should("be.visible");
    return this;
  }
  goToCart() {
    cy.get(locators.productpage.cartButton).click();
  }
}
module.exports = productPage;
