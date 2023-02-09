const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   async setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/features/*.features",
    baseUrl: "https://demo.guru99.com/insurance/v1/index.php",
    chromeWebSecurity: true,
  },
});
