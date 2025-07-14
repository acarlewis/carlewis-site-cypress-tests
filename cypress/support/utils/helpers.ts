export function compareStings(alias: string, actual: string) {
  cy.get(`@${alias}`).then((expected) => {
    // Ensure both expected and actual are strings before comparison
    let expectedString = typeof expected === 'string' ? expected : String(expected);
    let actualString = typeof actual === 'string' ? actual : String(actual);
    let cleanedExpectedString = expectedString.replace(/\s+/g, ' ').trim(); // Clean the project name by trimming whitespace
    let cleanedActualString = actualString.replace(/\s+/g, ' ').trim(); // Clean the actual name by trimming whitespace
    // Compare the cleaned strings
    expect(cleanedExpectedString).to.eq(cleanedActualString);
    // Log the comparison result
    cy.log(`Expected: ${cleanedExpectedString}, Actual: ${cleanedActualString}`);
  });
}

export const waitForLoader = (selector: string) => {
  // Wait for loader to appear
  cy.get('body').then(($body) => {
    if ($body.find(selector).length > 0) {
      cy.get(selector).should('be.visible');
      // Wait for loader to disappear
      cy.get(selector, { timeout: 10000 }).should('not.be.visible');
      // cy.get(selector, { timeout: 10000 }).should('not.exist');
    }
  });
};

export function generateRandomEmail() {
  return `user_${Math.floor(Math.random() * 10000)}@test.com`;
}

export function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function generateRandomNumber(length: number) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

export function generateRandomPhoneNumber() {
  const areaCode = Math.floor(Math.random() * 900) + 100; // 100-999
  const centralOfficeCode = Math.floor(Math.random() * 900) + 100; // 100-999
  const lineNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // 0000-9999
  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

export function generateRandomAddress() {
  const streetNumber = Math.floor(Math.random() * 10000);
  const streetName = generateRandomString(10);
  const city = generateRandomString(5);
  const state = generateRandomString(2).toUpperCase();
  const zipCode = generateRandomNumber(5);
  return `${streetNumber} ${streetName} St, ${city}, ${state} ${zipCode}`;
}

