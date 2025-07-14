import * as elt from '../pageObjects/objectSelectors'; // ✅
import { compareStings } from '../../support/utils/helpers'; // ✅


class PortfolioFun {

  viewAllPortfolios(btnText: string) {
    elt.getViewAllPortfoliosBtn().contains(btnText).click();
  }

  AllPortfolios(btnText: string) {
    cy.url().should('include', '/portfolios');  // Check that the URL contains "/pro"
    elt.getAllPortfolioListSection().should('be.visible'); // Ensure the portfolio section is visible
  }

  singlePortfolioName() {
    // User get the name of the first project
    elt.getPortfolioListSection()
    .then(() => {
      elt.getPortfolioInnertSection()
        .first()  // Selects the first project item
        .trigger('mouseover')  // Simulates hover over the first project
        .should('be.visible') // Waits for any hidden content to appear
        .invoke('text')  // Gets the text of the first project
        .as('firstProjectName'); // Stores the text in an alias
    })
    .then(() => {
      // Now log the alias to the Cypress console
      cy.get('@firstProjectName').then((projectName) => {
        cy.log('First project name:', projectName);  // Logs the alias value to Cypress console
      });
    });
  }

  clickOnSinglePortfolio(){
    // User should click on the project link
    elt.getPortfolioListSection()
    .then(() => {
      elt.getPortfolioInnertSection()
        .first()  // Selects the first project item
        .trigger('mouseover')  // Simulates hover over the first project
        .should('be.visible') // Waits for any hidden content to appear
        .find('a[cy-test="portfolio-single"]')  // Finds the <a> tag with the cy-test="file" attribute
        .click(); // Stores the text in an alias
    })
  }

  viewPortfolioDetailPage(){
    // User should see the project details page
    elt.getPortfolioSingleSection()
      .should('be.visible'); // Waits for any hidden content to appear
  }

  comparePortfolioName(){
    elt.getPortfolioTitle()
    .invoke('text')  // Extract text content
    .then((titleText) => {    
      // User should compare the project name with the first project name
      compareStings('firstProjectName', titleText); // Adjust the selector to match your project's title element
    });
  }



}

export default new PortfolioFun();