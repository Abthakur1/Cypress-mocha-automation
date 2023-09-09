describe('Test suite- handle alert', ()=>{
    it('Test- accept alert', ()=>{
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/');
        cy.get('button[name="alertbox"]').click();
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am an alert box!');
        });

    });

    it('accept alert and verify the message on alert', ()=>{
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/');
        cy.get('button[name="confirmalertbox"]').click();
        cy.on("window:confirm", (t)=>{
            expect(t).to.equals('Confirm pop up with OK and Cancel button');
            cy.contains('You clicked on OK!');
            
        })
    });

    it('dismiss the alert', ()=>{
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/');
        cy.get('button[name="confirmalertbox"]').click();
        cy.on('window:confirm', (t)=>{
            return false;
        })

        cy.contains('You clicked on Cancel!');
        
    })
});