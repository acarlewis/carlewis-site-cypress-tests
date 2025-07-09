import Fun_Page from "../../support/pageObjects/main/main";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User visit main site", () => {
  Fun_Page.openHomePage();
});

When("User click on the {string} link", (linkText: string) => {
  Fun_Page.clickNavLink(linkText)
});

Then("User should see the {string} title in the {string} section", (sectionTitle: string, sectionName: string) => {
  Fun_Page.verifySectionTitle(sectionTitle, sectionName)
});