import Fun_Page from "../../../../support/pageObjects/main/main";
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then('User should see {string} image in the {string} section', (author: string, sectionName: string) => {
  Fun_Page.verifyAuthorImage(author, sectionName);
});