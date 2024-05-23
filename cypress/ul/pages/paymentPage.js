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
  verifyPaymentPage() {
    cy.title().should("eq", "Checkout - ul-web-playground");
    return this;
  }
  chooseCOD() {
    cy.contains(locators.paymentpage.codOption).click();
    return this;
  }
  verifyProductInPaymentPage() {
    cy.get(locators.paymentpage.qtyItem).invoke("text").should("eq", "1");
    cy.get(locators.paymentpage.itemPrice)
      .invoke("text")
      .should("eq", "₹299.60");

    cy.get(locators.paymentpage.totlaPrice)
      .invoke("text")
      .should("eq", "₹335.86");
    return this;
  }
  completeOrder() {
    cy.get(locators.paymentpage.completeOrderButton).click();
    return this;
  }
  veriyOrderCompletion() {
    cy.title().should(
      "eq",
      "Thank you for your purchase! - ul-web-playground - Checkout"
    );
    return this;
  }
  goToHomePage() {
    cy.get(locators.paymentpage.continueShoppingButton).click();
  }
}
module.exports = paymentPage;
