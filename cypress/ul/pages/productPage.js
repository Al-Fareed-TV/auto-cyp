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
    cy.contains("Add to cart").should("be.visible");
    cy.contains("Buy it now").should("be.visible");
    return this;
  }
  changeQty(qty) {
    cy.get("#Quantity-template--15328405717213__main").type(qty);
    return this;
  }
  addProductToCart() {
    cy.contains("Add to cart").click();
    return this;
  }
  verifyProductAddedToCart() {
    cy.contains("Item added to your cart").should("be.visible");
    cy.contains("View my cart (1)").should("be.visible");
    return this;
  }
  goToCart() {
    cy.contains("View my cart (1)").click();
  }
}
module.exports = productPage