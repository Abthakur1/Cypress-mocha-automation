describe('Test suite', () => {
    it('Test-1', () => {
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        let env = Cypress.env("environment");
        let url = Cypress.env(env);
        cy.visit(url);
        // get all the vegetable names available
        cy.get('h4.product-name').should('have.length', 30);
        cy.get('h4.product-name').each(($el, index, $list) => {
            let vegetable = $el.text();
            cy.log(vegetable);

        })

        // verify that the cucumber has price Rs 48
        cy.xpath("//h4[@class='product-name' and text()='Cucumber - 1 Kg']//following-sibling::div[@class='product-action']").find('button').click();

        //verify the item is displayed as 1 after adding into cart
        cy.xpath("//div[@class='cart-info']/table/tbody/tr/td[3]/strong").first().invoke('text').then((items) => {
            expect(items).to.equals('1');
            cy.get('img[alt="Cart"]').click({ force: true });
            cy.get('ul.cart-items').first().should('be.visible');
            cy.xpath("//button[text()='PROCEED TO CHECKOUT']").click({ force: true });
            cy.xpath("//button[text()='Place Order']").click();
            cy.xpath("//label[text()='Choose Country']//..//select").select('India');
            cy.get('.chkAgree').click();
            cy.xpath("//button[text()='Proceed']").click();
            cy.contains("Thank you, your order has been placed successfully");


        })

    })
});