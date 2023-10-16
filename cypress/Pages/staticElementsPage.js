class staticPage {


   verifyElement(elementSelector, expectedText) {
      cy.get(elementSelector)
        .should('be.visible')
        .and('have.text', expectedText);
    }
  
    verifyDashboard() {
      this.verifyElement('.title', 'Dashboard');
    }
  
    verifySettings() {
      this.verifyElement('.mt-5 > a', '🔧 Settings');
    }
  
    verifySettingsElement2() {
      this.verifyElement('.has-text-centered > .title', 'Settings');
    }
  
    verifyBackToDashboard() {
      this.verifyElement('.has-text-centered > a', 'Back to Dashboard');
    }
  
    verifyLocations(){
      this.verifyElement('.container > :nth-child(1) > .title', 'Locations');
    }

    verifyLocationText(){
      this.verifyElement(':nth-child(1) > .subtitle', 'Select the locations you want to see');
    }

    verifyAddNewLocation(){
      this.verifyElement(':nth-child(1) > :nth-child(3) > .button','➕ Add new location');
    }

    verifyUnits(){
      this.verifyElement(':nth-child(2) > .title','Units');
    }
    verifyUnitsText(){
      this.verifyElement(':nth-child(2) > .subtitle','Select the unit system of your preference')
    }


    metricElement() {
      cy.get(".buttons > :nth-child(1)").should("be.visible");
    }
    imperialElement() {
          cy.get(".buttons > :nth-child(2)").should("be.visible");
        }


   
  
  
  

  
}
export default new staticPage();
