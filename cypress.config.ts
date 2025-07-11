import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    // baseUrl: "https://cyclone.42web.io",
    baseUrl: "http://localhost/portfolio",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    env: {
      // Hybrid step definitions
      stepDefinitions: [
        "cypress/e2e/step_definitions/**/*.ts",
        "cypress/e2e/features/**/step_definitions/*.ts"
      ],
      nonGlobalStepDefinitions: true
    }
  },
});