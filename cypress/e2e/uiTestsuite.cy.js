import staticElementsPage from "../Pages/staticElementsPage.js";
import elementsPage from "../Pages/elementsPage.js";


describe("Weather Forcast Testsuit ", () => {
  it("Verifys static elements in dashboard page", () => {
    cy.visit(Cypress.env('url'))
    staticElementsPage.verifyDashboard();
    staticElementsPage.verifySettings();
  }),
  it("Verifys static elements in Setings page", () => {
    cy.visit(Cypress.env('url')+"/Settings/");
    staticElementsPage.verifySettingsElement2();
    staticElementsPage.verifyBackToDashboard();
    staticElementsPage.verifyLocations();
    staticElementsPage.verifyLocationText();
    staticElementsPage.verifyAddNewLocation();
    staticElementsPage.verifyUnits();
    staticElementsPage.verifyUnitsText();
    staticElementsPage.metricElement();
    staticElementsPage.imperialElement();
  });

  it("Verify the static elements negative tests in Dashboard page", ()=>{
    cy.visit(Cypress.env('url'));
    cy.get('.title').should('eq','Settings');
    
  });
  it("Verify the static elements negative tests in settings page", ()=>{
    cy.visit(Cypress.env('url')+"/Settings/");
    cy.get('.has-text-centered > .title').should("be.visible").and('have.text','Back to Dashboard');
  })

it("Verify city field negative test" , ()=>{
  cy.visit(Cypress.env('url'));
  cy.get(':nth-child(3) > [data-testid="weather-card"]').should("be.visible").and('have.text','Berlin');
})

//mock location
function mockLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }
        throw err({ code: 1 });
      });
    } 
  };
}
  it('Geo Location Test', () => {
    cy.visit(Cypress.env('url'), mockLocation(40.7127281,-74.0060152)), //Giving Mocklocation coordinates
    elementsPage.getAccessMocklocation(),
    elementsPage.getMockCityName(),
    elementsPage.getMocklocationWeather(),
    elementsPage.getMocklocationWeatherValue(),
    //cy.wait(1000);  
    cy.screenshot('Mock location')
  }),
  it('Geo Location Negative Test' , () => {
    cy.visit(Cypress.env('url'), mockLocation(41.8933203,12.4829321)),
    cy.get(':nth-child(1) > [data-testid="weather-card"]')
    .should("be.visible")
    .and('have.text','Berlin');;
        }); 
 })
  it("Add new geographical locations", () => {
    cy.visit(Cypress.env('url')),
    elementsPage.getSettingsElement(),
    elementsPage.getAddNewlocation(),
    elementsPage.getChnageToImerial(),
    elementsPage.getBackToDashboardElementclick(),
    elementsPage.getWaitforCurrentlocation(),
    cy.screenshot('Add location')
  })
  it("Remove a geographical location ", ()=>{
    cy.visit(Cypress.env('url')),
    elementsPage.getSettingsElement(),
    elementsPage.getChnageToImerial(),
    elementsPage.getDeleteCitynameVerify(),
    elementsPage.getDeleteCity()
  })
  it("Metrics Change to Imperial", () => {
    cy.visit(Cypress.env('url')+"/Settings/");
    elementsPage.getChnageToImerial(),
    elementsPage.getBackToDashboardElementclick(),
    elementsPage.getWaitforCurrentlocation(),
    cy.screenshot('Metrics to Imperial')
  })
})


//Rome
//41.8933203,12.4829321
//New York
//40.7127281,-74.0060152
//Oslo
//59.9133301,10.7389701
//Helsinki
//60.1674881,24.9427473
