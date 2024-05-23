class paymentPage {
  static instance;

  constructor() {
    if (paymentPage.instance) {
      throw new Error(
        "Use paymentPage.getInstance() to get the single instance of this class."
      );
    }
    paymentPage.instance = this;
  }

  static getInstance() {
    if (!paymentPage.instance) {
      paymentPage.instance = new paymentPage();
    }
    return paymentPage.instance;
  }
  verifyPaymentPage() {
    cy.title().should("eq", "Checkout - ul-web-playground");
    return this;
  }
  chooseCOD() {
    cy.contains("Cash on Delivery (COD)").click();
    return this;
  }
  verifyProductInPaymentPage() {
    cy.get(
      "#app > div:nth-child(1) > div > div > div.f1jux.fc8Jc.kZBua.mB_Id._1fragemod._1fragemo9._1fragemuu > div > div.jCic4._1fragemod._1fragemoa._1fragemuu > div > aside > div > section > div > div:nth-child(1) > section > div._6zbcq55._1fragemor._1fragemox._6zbcq56 > div._6zbcq524._1fragemor._1fragem2d._6zbcq52b > div:nth-child(1) > div > div._1m6j2n3e._1fragemmi._1fragemrr._1fragemsa > div > div"
    )
      .invoke("text")
      .should("eq", "1");
    cy.get(
      "#app > div:nth-child(1) > div > div > div.f1jux.fc8Jc.kZBua.mB_Id._1fragemod._1fragemo9._1fragemuu > div > div.jCic4._1fragemod._1fragemoa._1fragemuu > div > aside > div > section > div > div:nth-child(1) > section > div._6zbcq55._1fragemor._1fragemox._6zbcq56 > div._6zbcq524._1fragemor._1fragem2d._6zbcq52b > div:nth-child(4) > div > span"
    )
      .invoke("text")
      .should("eq", "₹299.60");
    cy.get(
      "#app > div:nth-child(1) > div > div > div.f1jux.fc8Jc.kZBua.mB_Id._1fragemod._1fragemo9._1fragemuu > div > div.jCic4._1fragemod._1fragemoa._1fragemuu > div > aside > div > section > div > section > div.nfgb6p0 > div._1x41w3p1._1fragemov._1fragemnl._1x41w3p5 > div._1x41w3p8 > div > div > strong"
    )
      .invoke("text")
      .should("eq", "₹335.86");
    return this;
  }
  completeOrder() {
    cy.contains("Complete order").click();
    return this;
  }
  veriyOrderCompletion() {
    cy.title().should(
      "eq",
      "Thank you for your purchase! - ul-web-playground - Checkout"
    );
    return this;
  }
  goToHomePage() {
    cy.contains("Continue shopping").click();
  }
}
module.exports = paymentPage;