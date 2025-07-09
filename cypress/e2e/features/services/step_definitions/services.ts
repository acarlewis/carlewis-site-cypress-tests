import Fun_Page from "../../../../support/pageObjects/main/main";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("User should see the {string} services", (ServiceNum: string) => {
  Fun_Page.verifyServiceBox(ServiceNum)
});
