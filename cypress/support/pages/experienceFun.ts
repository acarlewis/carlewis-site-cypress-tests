import * as elt from '../pageObjects/objectSelectors'; // ✅


class ExperienceFun {

  verifyExperienceBox(experianceNum: string) {
    elt.getServiceBox(experianceNum).should('be.visible');
  }

}

export default new ExperienceFun();