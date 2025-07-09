import * as elt from './main/objects'; // ✅
import { comparePrices } from "../helpers/priceUtils"; // ✅


class ChanelPage {

  // This section contains methods for first test case
  openHomePage() {
    cy.visit('/Cpanel');
    cy.on('uncaught:exception', () => false);
  }


}

export default new ChanelPage();