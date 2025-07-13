import * as elt from '../pageObjects/objectSelectors'; // ✅


class AboutFun {

  verifyAuthorImage(imageAlt: string, sectionName: string) {
    elt.getAuthorImg(imageAlt, sectionName).should('be.visible');
  }
  verifySectionText(sectionText: string) {
    // cy.contains(sectionText).should('be.visible');
  }


}

export default new AboutFun();