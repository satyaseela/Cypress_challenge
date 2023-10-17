# How to

## Run the application

- Execute `npm start` command
- Open [http://localhost:3000/weather](http://localhost:3000/weather) to view it in the browser

## Run the tests

- Execute `npm test` command

-----------------------------------
# Cypress JavaScript End-to-End Testing Example Project

This is an example project for performing end-to-end testing using Cypress and JavaScript. It demonstrates how to organize test files and perform testing for both UI and API aspects of application.

## Installation

To run the tests locally, you'll need to have Node.js and npm installed. Then, install Cypress.

## Project Structure

The project is organized into the following directories:

- **cypress/e2e**: Contains UI test and API tests
- **cypress/e2e/uiTestsuite.cy.js**: Specific for UI regression testing.
- **cypress/e2e/weatherAPISuite.cy.js**:Specific for API testing


## UI Regression Test Suite

### Overview

The UI regression test suite covers the following scenarios:

- Verification of static elements on the application pages.
- Mocking a location and validating the current weather, temperature, sunrise, and sunset times.
- Adding and removing new geographical locations.
- Verifying preferred units by switching the units.

## API Testing
### Overview
  For API testing followed the OpenWeatherMap API to fetch and present real-time weather data based on a locations and validated their responses.

### Running Tests

To run the tests, use the following command:
npx cypress open

To run the tests in diffrent browsers use the following command:
npx cypress run --spec cypress\e2e\uiTestsuite.cy.js --browser browsername
