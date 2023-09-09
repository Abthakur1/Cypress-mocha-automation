class TextBox{
    
    getTextBox(inputText) {
        cy.get('input#autocomplete').type(inputText);
    }
}

export default TextBox;