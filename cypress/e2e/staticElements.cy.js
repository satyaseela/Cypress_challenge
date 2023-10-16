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
    elementsPage.accessMocklocation(),
    elementsPage.mockCityName(),
    elementsPage.mocklocationWeather(),
    elementsPage.mocklocationWeatherValue(),
    //cy.wait(1000);  
    cy.screenshot('Mock location')
  }),
  it("Add new geographical locations", () => {
    cy.visit(Cypress.env('url')),
    elementsPage.settingsElement(),
    elementsPage.addNewlocation(),
    elementsPage.chnageToImerial(),
    elementsPage.backToDashboardElementclick(),
    cy.wait(4000),
    cy.screenshot('Add location')
  })
  it("Remove a geographical location and Metrics Change to Imperial", ()=>{
    cy.visit(Cypress.env('url')),
    elementsPage.settingsElement(),
    elementsPage.deleteCitynameVerify(),
    elementsPage.deleteCity()
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
