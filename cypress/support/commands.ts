// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Custom command to compare stored alias value to actual value
// Cypress.Commands.add(
//   "comparePrices",
//   (aliasName: string, actualPrice: string) => {
//     cy.get(`@${aliasName}`).then((expectedPrice: any) => {
//         expect(actualPrice).to.eq(expectedPrice);
//     });
//   }
// );

// import { loginWithUI } from './utils/auth';

// Cypress.Commands.add('loginUI', (username: string, password: string) => {
//   loginWithUI(username, password);
// });