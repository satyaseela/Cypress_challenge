import { defineConfig } from "cypress";


export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 80000,
  env: {
    url:"http://localhost:3000/weather",
  },
  e2e: {
    setupNodeEvents(on, config) {
      //screenshotOnRunFailure = true;
     require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event lis
    }
  },
});
