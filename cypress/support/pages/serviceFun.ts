import * as elt from '../pageObjects/objectSelectors'; // ✅


class ServiceFun {

  verifyServiceBox(ServiceNum: string) {
    elt.getServiceBox(ServiceNum).should('be.visible');
  }
  
}

export default new ServiceFun();