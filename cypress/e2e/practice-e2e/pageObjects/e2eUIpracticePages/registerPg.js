class RegisterPage {
    
    // e.g. firstName , Abhishek
    //e.g. lastName , Thakur
    enterTextInTextFields(option, input) {
        cy.get("input[id=" + option + "]").type(input);
    }

    selectFromDropDown(option) {
        cy.get("select[id='countries_dropdown_menu']").select(option);
    }

    checkTermsAndConditions() {
        cy.get('#exampleCheck1').check();
    }

    clickOnRegisterButton() {
        cy.get('#registerBtn').click({ force: true });
    }


    userRegistration(fName, lName, phone,country, email, password) {
        this.enterTextInTextFields('firstName', fName);
        this.enterTextInTextFields('lastName', lName);
        this.enterTextInTextFields('phone', phone);
        this.selectFromDropDown(country);
        this.enterTextInTextFields('emailAddress', email);
        this.enterTextInTextFields('password', password);
        this.checkTermsAndConditions();
        this.clickOnRegisterButton();
    }

    verifyRegistration () {
        cy.get('#message').should('be.visible');
        cy.get('#message').invoke('text').then((text)=>{
            expect(text).to.contains('The account has been successfully created!');
        })

    }


}

export default RegisterPage;