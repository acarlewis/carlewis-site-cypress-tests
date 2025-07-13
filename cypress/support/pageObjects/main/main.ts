import * as elt from './objects'; // ✅
import { waitForLoader } from "../../utils/helpers"; // ✅


class MainPage {
  // **************************************************************************************
  // This section contains methods for Home test case
  // **************************************************************************************
  openHomePage() {
    waitForLoader('.se-pre-con'); // Wait for default .loader or pass your own selector
    cy.visit('/');
    // elt.getLoader().should('be.visible'); // Ensure loader is visible
    // cy.on('uncaught:exception', () => false);
    // elt.getLoader().should('not.exist'); // Ensure loader is not visible
  }

  verifyPageTitle(title: string) {
    cy.title().should('include', title);
  }

  clickNavLink(linkText: string) {
    waitForLoader('.se-pre-con'); // Wait for default .loader or pass your own selector
    elt.getNavLink(linkText).click();
  }
  
  verifyBackToTopButton() {
    elt.getBackToTopBtn().should('be.visible');
  }

  verifySectionTitle(sectionTitle: string, sectionName: string) {
    elt.getSectionTitle(sectionTitle, sectionName).should('be.visible');
  }
  // **************************************************************************************
  


  // **************************************************************************************
  // This section contains methods for About test case
  // **************************************************************************************
  verifyAuthorImage(imageAlt: string, sectionName: string) {
    elt.getAuthorImg(imageAlt, sectionName).should('be.visible');
  }
  verifySectionText(sectionText: string) {
    // cy.contains(sectionText).should('be.visible');
  }
  // **************************************************************************************
  


  // **************************************************************************************
  // This section contains methods for Sevices test case
  // **************************************************************************************
  verifyServiceBox(ServiceNum: string) {
    elt.getServiceBox(ServiceNum).should('be.visible');
  }
  // **************************************************************************************
  


  // **************************************************************************************
  // This section contains methods for Experiance test case
  // **************************************************************************************
  verifyExperienceBox(experianceNum: string) {
    elt.getServiceBox(experianceNum).should('be.visible');
  }
  // **************************************************************************************




  // **************************************************************************************
  // This section contains methods for Portfolio test case
  // **************************************************************************************
  viewAllPortfolios(btnText: string) {
    elt.getViewAllPortfoliosBtn().contains(btnText).click();
  }

  singlePortfolioName() {
    // User get the name of the first project
    cy.get('[cy-test="portfolio"]')
    .then(() => {
      cy.get('.item-inner')
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
    cy.get('[cy-test="portfolio"]')
    .then(() => {
      cy.get('.item-inner')
        .first()  // Selects the first project item
        .trigger('mouseover')  // Simulates hover over the first project
        .should('be.visible') // Waits for any hidden content to appear
        .find('a[cy-test="portfolio-single"]')  // Finds the <a> tag with the cy-test="file" attribute
        .click(); // Stores the text in an alias
    })
  }

  viewPortfolioDetailPage(){
    // User should see the project details page
    cy.get('#portfolio-single')
      .should('be.visible'); // Waits for any hidden content to appear
  }

  comparePortfolioName(){
    // User should compare the project name with the first project name
    cy.get('@firstProjectName').then((firstProjectName) => {
      const projectNameText = typeof firstProjectName === 'string' ? firstProjectName : String(firstProjectName);
      let cleanedProjectName = projectNameText.replace(/\s+/g, ' ').trim(); // Clean the project name by trimming whitespace
      // Compare the project name in the header with the first project name
      cy.get('h1.project-title') // Adjust the selector to match your project's title element
        .should('have.text', cleanedProjectName); // Asserts that the text matches the first project name
    });
  }

  // **************************************************************************************







}

export default new MainPage();