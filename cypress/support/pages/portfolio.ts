export const getBackToTopBtn = () => cy.get('#backToTop');

export const getNavLink = (linkText: string) => 
    cy.get('#navbar-menu')
        .find('a')
        .contains(linkText)