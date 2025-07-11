import Fun_Page from "../../../../support/pageObjects/main/main";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


// **************************************************************************************
// First Scenario: User Check Portfolio Section
// **************************************************************************************


When("User get the name of the first project", () => {
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
});

When("User should click on the project link", () => {
    cy.get('[cy-test="portfolio"]')
    .then(() => {
      cy.get('.item-inner')
        .first()  // Selects the first project item
        .trigger('mouseover')  // Simulates hover over the first project
        .should('be.visible') // Waits for any hidden content to appear
        .find('a[cy-test="portfolio-single"]')  // Finds the <a> tag with the cy-test="file" attribute
        .click(); // Stores the text in an alias
    })
});

When("User should see the project details page", () => {
    cy.get('#portfolio-single')
      .should('be.visible'); // Waits for any hidden content to appear
    
});

When("User should compare the project name with the first project name", () => {
    cy.get('@firstProjectName').then((firstProjectName) => {
      const projectNameText = typeof firstProjectName === 'string' ? firstProjectName : String(firstProjectName);
      let cleanedProjectName = projectNameText.replace(/\s+/g, ' ').trim(); // Clean the project name by trimming whitespace
      // Compare the project name in the header with the first project name
      cy.get('h1.project-title') // Adjust the selector to match your project's title element
        .should('have.text', cleanedProjectName); // Asserts that the text matches the first project name
    });
});

// **************************************************************************************



// **************************************************************************************
// Second Scenario: User Check Portfolio Through the "VIEW ALL PORTFOLIOS" link
// **************************************************************************************

Then("User should click on {string}", (linkText: string) => {
  // Click on the "VIEW ALL PORTFOLIOS" link
  cy.get('a').contains(linkText).click();
});

Then('User should click on {string}', () => {
  // Click on the "VIEW ALL PORTFOLIOS" link
  cy.get('a').contains('VIEW ALL PORTFOLIOS').click();
  // cy.contains("Recent Work").should("be.visible");
});

// **************************************************************************************
