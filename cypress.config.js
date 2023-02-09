const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   async setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/features/*.features",
    chromeWebSecurity: false,
  },
});
