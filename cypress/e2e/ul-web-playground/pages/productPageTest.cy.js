import {
  getAddToCartButton,
  getBuyNowButton,
  getQtyElement,
  getCartButton,
  getProductAddedMessage,
} from "../../../support/ul/components/Product/product";
describe('Test Product Description page', () => { 
    beforeEach('user is in product page',() => {
        cy.goToHomePage();
        cy.searchProduct("Alfa");
    })
    it('Verify product name',() => {
        
    })
 })