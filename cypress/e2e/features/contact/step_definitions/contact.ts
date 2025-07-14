import Fun_Page from "../../../../support/pages/contactFun";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// **************************************************************************************
// First Scenario: User Submit Contact Details with Valid Data
// **************************************************************************************

Then('User fill in the contact form with valid data', (dataTable: any) => {
  // Ensure the form is visible before filling it
  Fun_Page.verifyContactForm();

  // Convert the dataTable to a plain object
  const formData = dataTable.rowsHash();
  
  // Fill the form using the data
  Fun_Page.fillContactForm(formData);
});

Then('User should be able to submit the form successfully', () => {
  cy.get('form[cy-test="contact-form"]').submit();
  cy.get('[cy-test="message"]').should('be.visible');  // Adjust the selector to match your page's success message
});

Then('User should see a success message indicating the form was submitted', () => {
  cy.get('[cy-test="message"]').should('contain.text', 'Thank you for your message!');
});

// Optional: If applicable, check for confirmation email (This depends on your app's behavior)
Then('User should receive a confirmation email', () => {
  // Add logic to check for email receipt if your app supports this
});


// **************************************************************************************



// **************************************************************************************
// Second Scenario: User Submit Contact Details with Invalid Data
// **************************************************************************************

Then('User fill in the contact form with invalid data', (dataTable: any) => {
  // Ensure the form is visible before filling it
  Fun_Page.verifyContactForm();
  
  // Convert the dataTable to a plain object
  const formData = dataTable.rowsHash();
  
  // Fill the form using the data
  Fun_Page.fillContactForm(formData);
});
Then('User should see an error message indicating invalid input', () => {
  cy.get('form[cy-test="contact-form"]').submit();
  cy.get('[cy-test="message"]').should('be.visible');  // Adjust the selector to match your page's error message
});

Then('User should see an error message indicating the form was not submitted', () => {
  cy.get('[cy-test="message"]').should('contain.text', 'Please correct the errors and try again.');
});

// **************************************************************************************