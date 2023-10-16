# How to

## Run the application

- Execute `npm start` command
- Open [http://localhost:3000/weather](http://localhost:3000/weather) to view it in the browser

## Run the tests

- Execute `npm test` command

-----------------------------------
# Cypress JavaScript End-to-End Testing Example Project

This is an example project for performing end-to-end testing using Cypress and JavaScript. It demonstrates how to organize test files and perform testing for both UI and API aspects of your application.

## Installation

To run the tests locally, you'll need to have Node.js and npm installed. Then, install Cypress.

## Project Structure

The project is organized into the following directories:

- **cypress/e2e**: Contains UI regression test files.
- **cypress/e2e/uiRegression_suit**: Specific test suite for UI regression testing.
- **cypress/e2e/API**: Directory for API testing.
- **cypress/e2e/uiRegression_Testsuit**: Test suite for UI regression testing.

## UI Regression Test Suite

### Overview

The UI regression test suite covers the following scenarios:

- Verification of static elements on the application pages.
- Validation of the application's ability to use the current location.
- Mocking a location and validating the current weather, temperature, sunrise, and sunset times.
- Adding and removing new geographical locations.
- Verifying preferred units by switching the units.

### Running Tests

To run the UI regression tests, use the following command:

```bash
npx cypress open
