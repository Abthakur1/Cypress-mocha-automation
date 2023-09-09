import DropDown from '../pageObjects/dropDownPg';
import RadioButton from '../pageObjects/radioButtonPg';
import TextBox from '../pageObjects/textBoxPg';

const objDropDown = new DropDown();
const objRadioButton = new RadioButton();
const objTextBox = new TextBox();
describe('Rahul Shetty practice test e2e', () => {

    it('Test case- Radio Buttons', () => {
        objRadioButton.getRadioButtonExample('radio2');

    });

    it('Test case- drop down test', () => {
        objDropDown.getDropDown().should('be.visible');
        objDropDown.getSelectOptionFromDropDown('Option2')
    });

    it('Test case- test data combination execution', () => {
        cy.fixture('testData').as('readData');
        cy.get('@readData').then(data => {
            data.forEach(element => {
                cy.log(element.username);
                cy.log(element.password);
                cy.log(element.age);

            });

        })
        objDropDown.getDropDown().should('be.visible');
        objDropDown.getSelectOptionFromDropDown('Option2')
    });

});