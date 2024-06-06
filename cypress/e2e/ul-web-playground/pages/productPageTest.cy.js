import {
  getAddToCartButton,
  getBuyNowButton,
  getQtyElement,
  getCartButton,
  getProductAddedMessage,
} from "../../../support/ul/components/Product/product";
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
  });

  it("Verify product details", () => {
    cy.contains(testData.searchproduct);
    cy.contains(testData.productPage.productPrice);
    cy.get(getQtyElement())
      .invoke("val")
      .then((productQty) => {
        expect(productQty).to.equal(testData.productPage.productQty.toString());
      });
  });

  it("Verify product availability", () => {
    cy.get(getAddToCartButton())
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("Add to cart");
      });

    cy.get(getBuyNowButton())
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal("Buy it now");
      });
  });
  it("Verify images are displayed and visible", () => {
    cy.get(
      "#shopify-section-template--15328405717213__main > section > div > div.grid__item.product__media-wrapper > slider-component > ul"
    )
      .find("img")
      .should("have.length.greaterThan", 0)
      .and("be.visible");
  });
    it("Verify user is able to add to cart", () => {
        cy.get(getAddToCartButton()).click();
        cy.get(getCartButton()).should('be.visible');
        cy.contains(getProductAddedMessage()).should('be.visible');
  });
});
