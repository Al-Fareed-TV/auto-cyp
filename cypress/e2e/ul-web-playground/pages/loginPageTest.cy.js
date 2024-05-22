const LoginPageClass = require('../../../ul/pages/loginPage')

describe('Test Login page', () => {
    beforeEach(() => {
        cy.visit("https://web-playground.ultralesson.com/account/login");
    })
    it("user logs in with valid credentials", () => {
        const loginPage =new LoginPageClass();
        loginPage.loginUser();
    })
    it("user logs in with invalid credentials", () => {
        const loginPage =new LoginPageClass();
        loginPage.invalidLoginUser();
        cy.contains("Incorrect email or password.").should("be.visible");
    })
})