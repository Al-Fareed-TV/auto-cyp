class commonUtils{
    getTextOfElement(text) {
        cy.get(
          "#product-grid > ul > li:nth-child(1) > div > div.card-information > div > h3 > a"
        ).invoke("text")
          .then((text) => {
            cy.log(text);
            expect(text).to.exist;
          });;
    }
}
module.exports = commonUtils