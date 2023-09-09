describe('Test suite with failure', ()=>{
    it('Test -1', ()=>{
        cy.visit("https://www.google.com/");
        cy.get('textarea[title="Search"]').type("amazon");
        cy.get('img[alt="Google"]').scrollIntoView().click();
        cy.xpath('(//input[@aria-label="Google Search"])[2]').should('be.visible').click({force:true});
        cy.get('h2[data-attrid="title"]').find('span').should('not.have.text', 'Amazon.com');
    })
})