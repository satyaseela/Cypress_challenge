import { defineConfig } from "cypress";


export default defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 70000,
  env: {
    url:"http://localhost:3000/weather",
  },
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event lis
    }
  },
});
