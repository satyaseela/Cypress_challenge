class elementsPage {
<<<<<<< HEAD
   
  settingsElement() {
=======
    getSettingsElement() {
>>>>>>> main
      cy.get(".mt-5 > a")
        .should("be.visible")
        .click();
    }
    getBackToDashboardElementclick() {
      cy.get(".has-text-centered > a")
        .should('be.visible')
        .click();
    }
    getMockCityName(){
      cy.get('.title').invoke('text')
        .then((text) =>{
          cy.log("Mock Location Name is " + text);
        });
    }
    getMocklocationWeather() {
      cy.get('.is-size-3').should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log("Weather is: " + text);
         });
    }
    getMocklocationWeatherValue() {
      cy.get('.is-size-1')
        .invoke("text")
        .then((text) => {
          cy.log("Temeprature is: " +  text);
         });
    }
    getChnageToImerial(){
      cy.get('.buttons > :nth-child(2)').click()
    }
    getAddNewlocation(){
      cy.window().then(function(p){
        cy.stub(p, "prompt").returns("Delhi");
        cy.get(':nth-child(1) > :nth-child(3) > .button').click()
      })
    }
    getAccessMocklocation(){
      cy.get(':nth-child(1) > [data-testid="weather-card"] > .card',).click()
    }
    getDeleteCity(){
      cy.get(':nth-child(2) > div > .delete').click();
      cy.get('.has-text-centered > a').click();
    }
    getDeleteCitynameVerify() {
      cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2)').should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log("Delete city name from the list is: " + text);
         });
    }
    getWaitforCurrentlocation(){
      cy.get(':nth-child(1) > [data-testid="weather-card"] > .card').should('be.visible');
    }
  }
  export default new elementsPage();