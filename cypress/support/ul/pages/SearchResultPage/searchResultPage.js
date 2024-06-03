import locators from "../../config/locators.json";

function selectFirstItem() {
  cy.get(locators.searchResultPage.firstItemListed).click();
}

function checkNameOfItemListed() {
  cy.get(locators.searchResultPage.firstItemListedName)
    .invoke("text")
    .then((text) => {
      expect(text).to.exist;
    });
}

module.exports = {
  selectFirstItem,
  checkNameOfItemListed,
};
