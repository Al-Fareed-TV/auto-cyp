import locators from "../../config/locators.json";

function navigateToHomePage() {
  cy.get(locators.accountpage.homePageButton).click();
}

function userLogout() {
  cy.contains(locators.accountpage.logoutButton).click();
}

export { navigateToHomePage, userLogout };
