import locators from "../config/locators.json";

function searchItem(item) {
  cy.get(locators.homepage.searchIcon).click();
  cy.get(locators.homepage.searchInputElement).type(item + "\n");
}

function goToAccountPage() {
  cy.get(locators.homepage.accountIcon).click();
}

module.exports = {
  searchItem,
  goToAccountPage,
};
