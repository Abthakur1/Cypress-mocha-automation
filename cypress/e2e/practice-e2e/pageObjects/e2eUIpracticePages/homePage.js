class HomePg {

    // all the options are having different id but can be used as a parameter with same locator
    // e.g. forms , visual, intercept-api, checkboxes etc.
    clickOnLinkOptions(option) {
         cy.get("a[id=" +option+ "]").first().click();
        
    }

    formOption() {
        this.clickOnLinkOptions('forms');
    }

    chooseRegistration () {
        this.clickOnLinkOptions('register');
    }


}

export default HomePg;