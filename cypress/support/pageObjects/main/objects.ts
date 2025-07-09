export const getBackToTopBtn = () => cy.get('#backToTop');

export const getLoader = () => cy.get('.se-pre-con')

export const getNavLink = (linkText: string) => 
    cy.get('#navbar-menu')
.find('a')
.contains(linkText)

export const getSectionTitle = (sectionTitle: string, sectionName: string) => 
    cy.get(`#${sectionName.toLowerCase()}`)
.find('h2')
.contains(sectionTitle)

export const getAuthorImg = (imageAlt: string, sectionName: string) => 
    cy.get(`#${sectionName.toLowerCase()}`)
.find('img')
.should('have.attr', 'alt', imageAlt)


export const getServiceBox = (ServiceNum: string) => cy.get(`[cy-test="services-items${ServiceNum}"]`)
export const getExperienceBox = (experianceNum: string) => cy.get(`[cy-test="experiance${experianceNum}"]`)