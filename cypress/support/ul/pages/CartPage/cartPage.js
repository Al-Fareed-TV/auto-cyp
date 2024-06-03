import * as locators from "./locators.js";

function verifyCartPage(title) {
  cy.title().should("eq", title);
  cy.contains("Your cart");
}

function verifyProductNameInCart() {
  cy.get(locators.cartItemName)
    .invoke("text")
    .then((text) => {
      expect(text).to.exist;
    });
}

function verifyPriceInCartPage() {
  cy.get(locators.cartItemPrice)
    .invoke("text")
    .then((price) => {
      expect(price).to.exist;
    });
}

function verifyQtyInCartPage() {
  cy.get(locators.cartItemQty)
    .invoke("val")
    .then((qty) => {
      expect(qty).to.exist;
    });
}

function checkoutProduct() {
  cy.get(locators.checkoutButton).click();
}

export {
  verifyCartPage,
  verifyProductNameInCart,
  verifyPriceInCartPage,
  verifyQtyInCartPage,
  checkoutProduct,
};
