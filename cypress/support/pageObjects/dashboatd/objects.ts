export const getBackToTopBtn = () => cy.get('#backToTop');

export const getCategory = (category: string) => cy.get(`[data-aria-label="${category}"]`);

