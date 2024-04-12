const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qutki5',
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
