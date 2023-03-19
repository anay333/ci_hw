const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4a9hn2",
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
