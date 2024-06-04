import {
  getOrderTable,
  getPageRoute,
  getAddressElement,
  getOrderIdElement,
  getOrderDateElement,
  getOrderPriceElement,
} from "../../../support/ul/components/Account/account.js";

describe("Account Page test", () => {
  let testData;

  before(() => {
    cy.fixture("data.json").then((data) => {
      testData = data;
    });
  });

    it("Verify title of the page", () => {
      cy.url().should("include", getPageRoute());
      cy.title().should("eq", "Account – ul-web-playground");
    });

    it("Verify Order history table and its texts", () => {
      cy.get(getOrderTable()).should("be.visible");

      testData.accountPage.orderTableText.forEach((text) => {
        cy.contains(text).should("be.visible");
      });
    });

    it("Verify user Address details", () => {
      cy.contains("Account details");

      cy.get(getAddressElement())
        .invoke("text")
        .then((text) => {
          cy.contains(text);
        });
    });

    it("Verify the format of order id value in the order history table", () => {
      const orderIdRegex = /^#[0-9]{4}$/;
      cy.get(getOrderIdElement())
        .first()
        .invoke("text")
        .then((orderId) => {
          expect(orderId.trim()).to.match(orderIdRegex);
        });
    });
  it("Verify the format of order date value in the order history table", () => {
    const orderDateRegex =
      /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/;
    cy.get(getOrderDateElement())
      .first()
      .invoke("text")
      .then((date) => {
        expect(date.trim()).to.match(orderDateRegex);
      });
  });

  it("Verify the currency format", () => {
    const currencyRegex = /^Rs\. \d+(\.\d{1,2})?$/;
    cy.get(getOrderPriceElement())
      .invoke("text")
      .then((currencyText) => {
        expect(currencyText.trim()).to.match(currencyRegex);
      });
  });
});
