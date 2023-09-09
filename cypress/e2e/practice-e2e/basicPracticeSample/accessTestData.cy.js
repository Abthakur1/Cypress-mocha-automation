describe('Multiple Window', () =>{


    it('Test-1', ()=>{
        cy.fixture('testData').as('userData');
        cy.get('@userData').then(data=>{
            cy.log(data[1].username);
            cy.log(data[1].password);
            cy.log(data[1].age);
            cy.log(data[1].company);

        })

    });

    it('Multiple set of test data - run multiple times', ()=>{

        cy.fixture('testData').as('readData');
        cy.get('@readData').then(data=>{
            data.forEach(d => {
                cy.log(d.username);
                cy.log(d.password);
                cy.log(d.age);
                cy.log(d.company);
                
            });
                
            
        })
    })
});