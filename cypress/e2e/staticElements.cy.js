import staticElementsPage from "../Pages/staticElementsPage.js";
import elementsPage from "../Pages/elementsPage.js";


describe("Weather Forcast Testsuit ", () => {
  it("Verifys static elements in dashboard page", () => {
    cy.visit(Cypress.env('url'))
    staticElementsPage.verifyDashboard();
    staticElementsPage.verifySettings();
  }),
  it("Verifys static elements in Satings page", () => {
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
    cy.visit(Cypress.env('url'), mockLocation(60.1674881,24.9427473)),
    cy.get(':nth-child(1) > [data-testid="weather-card"] > .card',).click(),
    elementsPage.mockCityName(),
    elementsPage.cloudElement(),
    elementsPage.cloudValueElement(),
    //cy.wait(1000);
    cy.screenshot()
  }),
  it("Add new geographical locations", () => {
    cy.visit(Cypress.env('url')),
    elementsPage.settingsElement(),
      cy.window().then(function(p){
        cy.stub(p, "prompt").returns("Delhi");
        cy.get(':nth-child(1) > :nth-child(3) > .button').click()
      })
    cy.get('.has-text-centered > a').click()
  })
  it("Remove a geographical location", ()=>{
    cy.visit(Cypress.env('url')),
    elementsPage.settingsElement(),
    cy.get('.buttons > :nth-child(2)').click(),
    cy.get('.has-text-centered > a').click(),
    elementsPage.backToDashboardElementclick(),
    //elementsPage.settingsElement(),
    elementsPage.deletecLocation() // Deleting a city from the list
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
