import locators from "../config/locators.json";

function verifyCartPage(title) {
  cy.title().should("eq", title);
  cy.contains("Your cart");
}

function verifyProductNameInCart() {
  cy.get(locators.cartpage.cartItemName)
    .invoke("text")
    .then((text) => {
      expect(text).to.exist;
    });
}

function verifyPriceInCartPage() {
  cy.get(locators.cartpage.cartItemPrice)
    .invoke("text")
    .then((price) => {
      expect(price).to.exist;
    });
}

function verifyQtyInCartPage() {
  cy.get(locators.cartpage.cartItemQty)
    .invoke("val")
    .then((qty) => {
      expect(qty).to.exist;
    });
}

function checkoutProduct() {
  cy.get(locators.cartpage.checkoutButton).click();
}

export {
  verifyCartPage,
  verifyProductNameInCart,
  verifyPriceInCartPage,
  verifyQtyInCartPage,
  checkoutProduct,
};
