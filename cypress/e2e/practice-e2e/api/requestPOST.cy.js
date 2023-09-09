describe('Test suite - POST Request', () => {
    it('Test case 1', () => {
        cy.fixture('apiPost1').as('readData');
        // cy.get('@readData').then(data=>{
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl')+'/posts/1',
                body:{
                    "title": "foo",
                    "body": "baz",
                    "userId": "1",
                    "id": "1"
                }
            }).then((response)=>{
                cy.log(response.status);

            });

        // });
           
        })


    });