class accountPage{
    navigateToHomePage() {
        cy.get(
          "#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(1) > a > span"
        ).click();
    }
}
module.exports = accountPage