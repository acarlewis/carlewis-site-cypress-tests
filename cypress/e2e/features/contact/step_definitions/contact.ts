import Fun_Page from "../../../../support/pageObjects/main/main";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('User should see the "Contact Me" section', () => {
  cy.contains("Contact Me").should("be.visible");
});