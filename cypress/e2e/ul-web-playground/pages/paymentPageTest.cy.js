import { getBuyNowButton } from "../../../support/ul/components/Product/product";
import {
  getCodOption,
  getCompleteOrderButton,
  getContinueShoppingButton,
  getQtyItem,
  getItemPrice,
  getTotalPrice,
  accountSectionDropDown,
  addressSectionDropDown,
} from "../../../support/ul/components/Payment/payment";
describe("Test Product Description page", () => {
  let testData;
  before(() => {
    cy.fixture("data.json").then((data) => {
      testData = data;
    });
  });
  beforeEach("user is in product page", () => {
    cy.goToHomePage();
    cy.searchProduct(testData.searchproduct);
    cy.get(getBuyNowButton()).click();
    cy.title().should("eq", testData.paymentpage.title);
  });
  it("Verify account is displayed in payment page and able to logout", () => {
    cy.contains("Account");
    cy.contains(Cypress.env("username"));
    cy.get(accountSectionDropDown())
      .click()
      .then(() => {
        cy.contains("Log out").click();
      });
  });
    it("Verify Shipping Address", () => {
        cy.contains("Ship to");
        cy.contains(testData.paymentpage.address);
        cy.get(addressSectionDropDown()).click();
    })
 it("Verify user able to select COD", () => {
        cy.get(getCodOption()).click();
 })
    it("Verify Order Summary", () => {
        cy.get(getQtyItem())
          .invoke("text")
            .should("eq", testData.cartpage.ProductQtyInCart.toString());
        // expect().to.
    })
});



