class homePage {
  static instance;

  constructor() {
    if (homePage.instance) {
      throw new Error(
        "Use homePage.getInstance() to get the single instance of this class."
      );
    }
    homePage.instance = this;
  }

  static getInstance() {
    if (!homePage.instance) {
      homePage.instance = new homePage();
    }
    return homePage.instance;
  }
  searchItem(item) {
    cy.get(
      "#shopify-section-header > sticky-header > header > div > details-modal > details > summary > span > svg.modal__toggle-open.icon.icon-search"
    ).click();
    cy.get("#Search-In-Modal").type(item);
  }
  goToAccountPage() {
    cy.get(
      "#shopify-section-header > sticky-header > header > div > a.header__icon.header__icon--account.link.focus-inset.small-hide"
    ).click();
  }
}
module.exports = homePage;