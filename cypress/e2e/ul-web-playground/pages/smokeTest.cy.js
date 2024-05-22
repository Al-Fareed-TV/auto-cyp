const LoginPageClass = require("../../../ul/pages/loginPage");
const AccountPageClass = require("../../../ul/pages/accountPage");
const HomePageClass = require("../../../ul/pages/homePage");
const searchResultClass = require("../../../ul/pages/searchResultPage");

describe("Smoke Test", () => {
  beforeEach(() => {
    cy.visit("https://web-playground.ultralesson.com/account/login");
  });
  it("Test happy paths", () => {
    const loginPage = new LoginPageClass();
    const accountPage = new AccountPageClass();
    const homePage = new HomePageClass();
    const searchPage = new searchResultClass();
      loginPage.loginUser();
      accountPage.navigateToHomePage();
      cy.title().should('eq', 'ul-web-playground')
      homePage.searchItem("Jeans\n");
      searchPage.checkNameOfItemListed("Jeans");
      searchPage.selectFirstItem();

  });
    
  
});
