import locators from "../config/locators.json";
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
    cy.get(locators.searchResultPage.firstItemListed).click();
  }
  checkNameOfItemListed(text) {
    cy.get(locators.searchResultPage.firstItemListedName)
      .invoke("text")
      .then((text) => {
        expect(text).to.exist;
      });
    return this;
  }
}
module.exports = searchResultPage;
