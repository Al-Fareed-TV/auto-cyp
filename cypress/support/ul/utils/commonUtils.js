class commonUtils {
  getTextOfElement(locator) {
    cy.get("locator").invoke("text");
  }
  getValueOfInputElement() {
    cy.get("locator").invoke("val");
  }
}
module.exports = commonUtils;
