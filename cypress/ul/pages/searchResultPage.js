class searchResultPage{
    
    selectFirstItem() {
        cy.get("#product-grid > ul > li:nth-child(1)").click();
    }
}
module.exports = searchResultPage;