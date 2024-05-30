import locators from "../config/locators.json";

function checkProductAvailability() {
  cy.get(locators.productpage.addToCartButton).should("be.visible");
  cy.get(locators.productpage.buyNowButton).should("be.visible");
}

function changeQty(qty) {
  cy.get(locators.productpage.qtyElement).type(qty);
}

function addProductToCart() {
  cy.get(locators.productpage.addToCartButton).click();
}

function verifyProductAddedToCart() {
  cy.contains(locators.productpage.productAddedMessage).should("be.visible");
  cy.get(locators.productpage.cartButton).should("be.visible");
}

function goToCart() {
  cy.get(locators.productpage.cartButton).click();
}

module.exports = {
  checkProductAvailability,
  changeQty,
  addProductToCart,
  verifyProductAddedToCart,
  goToCart,
};
