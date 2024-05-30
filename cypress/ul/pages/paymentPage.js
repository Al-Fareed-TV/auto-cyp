import locators from "../config/locators.json";
class paymentPage {
  static instance;

  constructor() {
    if (paymentPage.instance) {
      throw new Error(
        "Use paymentPage.getInstance() to get the single instance of this class."
      );
    }
    paymentPage.instance = this;
  }

  static getInstance() {
    if (!paymentPage.instance) {
      paymentPage.instance = new paymentPage();
    }
    return paymentPage.instance;
  }
  verifyPaymentPage(title) {
    cy.title().should("eq", title);
    return this;
  }
  chooseCOD() {
    cy.contains(locators.paymentpage.codOption).click();
    return this;
  }
  verifyProductInPaymentPage(productQty,productPrice,totalPrice) {
    cy.get(locators.paymentpage.qtyItem)
      .invoke("text")
      .should("eq", productQty);
    
    cy.get(locators.paymentpage.itemPrice)
      .invoke("text")
      .should("eq", productPrice);

    cy.get(locators.paymentpage.totlaPrice)
      .invoke("text")
      .should("eq", totalPrice);
    return this;
  }
  completeOrder() {
    cy.get(locators.paymentpage.completeOrderButton).click();
    return this;
  }
  veriyOrderCompletion(message) {
    cy.title().should(
      "eq",
      message
    );
    return this;
  }
  goToHomePage() {
    cy.get(locators.paymentpage.continueShoppingButton).click();
  }
}
module.exports = paymentPage;
