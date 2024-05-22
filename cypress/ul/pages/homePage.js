class homePage{
    searchItem(item) {
        cy.get(
          "#shopify-section-header > sticky-header > header > div > details-modal > details > summary > span > svg.modal__toggle-open.icon.icon-search"
        ).click();
        cy.get("#Search-In-Modal").type(item);

    }
}
module.exports = homePage;