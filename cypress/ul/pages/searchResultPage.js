class searchResultPage {
  static instance;

  constructor() {
    if (searchResultPage.instance) {
      throw new Error(
        "Use searchResultPage.getInstance() to get the single instance of this class."
      );
    }
    searchResultPage.instance = this;
  }

  static getInstance() {
    if (!searchResultPage.instance) {
      searchResultPage.instance = new searchResultPage();
    }
    return searchResultPage.instance;
  }
  selectFirstItem() {
    cy.get("#product-grid > ul > li:nth-child(1)").click();
  }
  checkNameOfItemListed(text) {
    cy.get(
      "#product-grid > ul > li:nth-child(1) > div > div.card-information > div > h3 > a"
    )
      .invoke("text")
      .then((text) => {
        expect(text).to.exist;
      });
    return this;
  }
}
module.exports = searchResultPage;