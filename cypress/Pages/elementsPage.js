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
    mocklocationWeather() {
      cy.get('.is-size-3').should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log("Weather is: " + text);
         });
    }
    chnageToImerial(){
      cy.get('.buttons > :nth-child(2)').click()
    }
    addNewlocation(){
      cy.window().then(function(p){
        cy.stub(p, "prompt").returns("Delhi");
        cy.get(':nth-child(1) > :nth-child(3) > .button').click()
      })
    }
    accessMocklocation(){
      cy.get(':nth-child(1) > [data-testid="weather-card"] > .card',).click()
    }
    mocklocationWeatherValue() {
      cy.get('.is-size-1')
        .invoke("text")
        .then((text) => {
          cy.log("Temeprature is: " +  text);
         });
    }
    deleteCity(){
      cy.get(':nth-child(2) > div > .delete').click();
      cy.get('.has-text-centered > a').click();
    }
    deleteCitynameVerify() {
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2)').should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log("Delete city name from the list is: " + text);
         });
    }
  }
  export default new elementsPage();