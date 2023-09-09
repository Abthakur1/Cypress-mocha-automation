class DropDown {

    getDropDown(){
        return cy.get('#dropdown-class-example');
    }

    getSelectOptionFromDropDown (option){ // Option2
        cy.get('#dropdown-class-example').select(option);
    }
}

export default DropDown;