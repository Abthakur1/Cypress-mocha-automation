class Buttons {

    checkCheckBox(options) {
       return cy.get("input[id="+options+"]");
    }

    chekcTheCheckBox () {
        this.checkCheckBox('checkbox3').check();
        this.checkCheckBox('checkbox3').should('be.checked');
    }

    radioButtonOptions() {
        cy.get('a[id="radio-buttons"]').click({force:true});
    }

}

export default Buttons;