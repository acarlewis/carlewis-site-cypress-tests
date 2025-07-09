import Fun_Page from "../../../../support/pageObjects/main/main";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('User should see the "Recent Work" section', () => {
  cy.contains("Recent Work").should("be.visible");
});

When('User get the name of the first project', () => {
  cy.get(".portfolio-item").first().invoke("text").as("firstProject");
});

Then('User should click on "VIEW ALL PORTFOLIOS"', () => {
  cy.contains("VIEW ALL PORTFOLIOS").click();
});