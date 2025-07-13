import * as elt from '../pageObjects/objectSelectors'; // ✅
import { waitForLoader } from "../utils/helpers"; // ✅


class CommonFun {
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



}

export default new CommonFun();