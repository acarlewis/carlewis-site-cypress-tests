import comFun from "../../../../support/pages/commonFun";
import Fun from "../../../../support/pages/portfolioFun";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


// **************************************************************************************
// First Scenario: User Check Portfolio Section
// **************************************************************************************


When("User get the name of the first project", () => {
  // User get the name of the first project
  Fun.singlePortfolioName();
});

When("User should click on the project link", () => {
  // User should click on the project link
  Fun.clickOnSinglePortfolio();
});

When("User should see the project details page", () => {
  // User should see the project details page
 Fun.viewPortfolioDetailPage();
});

When("User should compare the project name with the first project name", () => {
  // User should compare the project name with the first project name
 Fun.comparePortfolioName();
});

// **************************************************************************************



// **************************************************************************************
// Second Scenario: User Check Portfolio Through the "VIEW ALL PORTFOLIOS" link
// **************************************************************************************

Then('User should click on {string}', (btnText: string) => {
  // User should click on "VIEW ALL PORTFOLIOS"
  Fun.viewAllPortfolios(btnText);
});

// **************************************************************************************
