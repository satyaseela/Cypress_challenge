class elementsPage {
    settingsElement() {
      cy.get(".mt-5 > a")
        .should("be.visible")
        .click();
    }
    backToDashboardElementclick() {
      cy.get(".has-text-centered > a")
        .should('be.visible')
        .click();
    }
    mockCityName(){
      cy.get('.title').invoke('text')
        .then((text) =>{
          cy.log("Mock Location Name is " + text);
        });
    }
    cloudElement() {
      cy.get('.is-size-3').should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log("Weather is: " + text);
         });
    }
    cloudValueElement() {
      cy.get('.is-size-1')
        .invoke("text")
        .then((text) => {
          cy.log("Temeprature is: " +  text);
         });
    }
    deletecLocation(){
      cy.get(':nth-child(1) > div > .delete').click();
      cy.get('.buttons > :nth-child(1)').click();
      cy.get('.has-text-centered > a').click();
    }
  }
  export default new elementsPage();