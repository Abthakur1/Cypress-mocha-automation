const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
    
  },

  env:{
    
    environment: "qa",
    qa:"https://rahulshettyacademy.com/seleniumPractise/#/",
    uat:"https://www.rahulshettyacademy.com/AutomationPractice/",
    dev:"dev env url",
    baseUrl:'https://jsonplaceholder.typicode.com'
  },

  pageLoadTimeout:50000,
  defaultCommandTimeout:10000,
  retries:1,
  screenshotsFolder:"cypress/screenshots",
  screenshotOnRunFailure: true,
});
