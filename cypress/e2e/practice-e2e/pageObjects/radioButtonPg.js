class RadioButton {

    getRadioButtonExample (radioOption) {  // radio2
         cy.get('input[name="radioButton"][value='+radioOption+']').click({force:true});
    }

}
export default RadioButton;