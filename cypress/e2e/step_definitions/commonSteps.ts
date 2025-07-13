import comFun from "../../support/pages/commonFun";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User visit main site", () => {
  comFun.openHomePage();
});

When("User click on the {string} link", (linkText: string) => {
  comFun.clickNavLink(linkText)
});

Then("User should see the {string} title in the {string} section", (sectionTitle: string, sectionName: string) => {
  comFun.verifySectionTitle(sectionTitle, sectionName)
});