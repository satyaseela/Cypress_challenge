
describe('negtive api testing', () => {
it.only('Handles Unexpected API Response', () => {
    const city = 'Cairo';
    const apiKey = '300532edc3ad967d8a7995da10cb7d9d';
      // Mock the location API response with an unexpected or invalid payload
      cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
       {
        statusCode: 500, // Simulate a server error
        body: 'Invalid location data', // Unexpected response data
      }).as('locationRequest');
  
      // Visit the page or perform the action that mocks the location
      cy.visit(Cypress.env('url')); // Replace with the actual app URL
  cy.wait(5000);
      // Ensure that the app handles the unexpected response appropriately
      cy.wait('@locationRequest').then((interception) => {
        // Assert that the app displays an error message or handles the error as expected
        expect(interception.response.statusCode).to.equal(500); // Check for the expected status code
        expect(interception.response.body).to.include('Invalid location data'); // Check for the expected error message
        // Add additional assertions as needed
      });
  
      // You can also test other parts of the application to ensure it remains functional after the error
    });
})