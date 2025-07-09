// cypress/support/utils/auth.ts

/**
 * Perform UI login using the login form.
 * @param username - User's email or username
 * @param password - User's password
 */
export function loginWithUI(username: string, password: string): void {
  cy.visit('/login');
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard'); // or any post-login route
}

/**
 * Perform API login and set session storage or cookies.
 * Faster than UI login.
 * @param username - User's email
 * @param password - User's password
 */
export function loginWithAPI(username: string, password: string): void {
  cy.request({
    method: 'POST',
    url: '/api/login', // Adjust based on your backend route
    body: { email: username, password },
  }).then((response) => {
    expect(response.status).to.eq(200);
    window.localStorage.setItem('auth_token', response.body.token);
  });
}
