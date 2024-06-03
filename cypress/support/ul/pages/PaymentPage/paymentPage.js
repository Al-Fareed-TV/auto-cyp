import locators from "../../config/locators.json";

function verifyPaymentPage(title) {
  cy.title().should("eq", title);
}

function chooseCOD() {
  cy.contains(locators.paymentpage.codOption).click();
}

function verifyProductInPaymentPage(productQty, productPrice, totalPrice) {
  cy.get(locators.paymentpage.qtyItem).invoke("text").should("eq", productQty);

  cy.get(locators.paymentpage.itemPrice)
    .invoke("text")
    .should("eq", productPrice);

  cy.contains(totalPrice);
}

function completeOrder() {
  cy.get(locators.paymentpage.completeOrderButton).click();
}

function verifyOrderCompletion(message) {
  cy.title().should("eq", message);
}

function goToHomePage() {
  cy.get(locators.paymentpage.continueShoppingButton).click();
}

module.exports = {
  verifyPaymentPage,
  chooseCOD,
  verifyProductInPaymentPage,
  completeOrder,
  verifyOrderCompletion,
  goToHomePage,
};
