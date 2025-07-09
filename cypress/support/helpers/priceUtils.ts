export function comparePrices(alias: string, actual: string) {
  cy.get(`@${alias}`).then((expected) => {
    expect(actual).to.eq(expected);
  });
}