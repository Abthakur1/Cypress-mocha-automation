/// <reference types="Cypress" />
describe('Test Suite -1', ()=>{
    it('test case', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123', {log:false});
        cy.get('button[type="submit"]').click();
       cy.get('div.orangehrm-attendance-card-summary-total p').invoke('text').then((text)=>cy.log(text));
       cy.get('p.oxd-userdropdown-name').should('have.text','Paul Collings');
       
    })
    
})