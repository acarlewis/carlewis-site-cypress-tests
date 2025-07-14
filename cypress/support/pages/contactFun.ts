import * as elt from '../pageObjects/objectSelectors'; // ✅


class ContactFun {
  // **************************************************************************************
  // This section contains methods for Contact test case
  // **************************************************************************************
  
  verifyContactForm() {
    // elt.getContactForm().should('be.visible');
    elt.getContactForm().should('be.visible');
  }

  fillContactForm(formData: any) {
      elt.getInputName().type(formData.Name);
      elt.getInputPhone().type(formData.Phone);
      elt.getInputEmail().type(formData.Email);
      elt.getInputMessage().type(formData.Message);
  }

  verifyContactFormFields() {
    // elt.getContactFormFields().should('have.length', 3); // Assuming there are 3 fields: name, email, message
  }

  verifySubmitButton() {
    // elt.getSubmitButton().should('be.visible');
  }




}

export default new ContactFun();