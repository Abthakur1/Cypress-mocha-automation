describe('API GET Request tests', ()=>{

    it('Test1', ()=>{
        
        cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl')+'/posts'
        }).then((response)=>{
            cy.log(response.status);
            cy.log(JSON.stringify(response.body));
            cy.log(JSON.stringify(response.body[0].userId));
            cy.log(JSON.stringify(response.body[0].title));
            response.body.forEach(element => {
                var flag;
                cy.log(element.body);
                if(element.body.includes('eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam'));
                flag = true;
                expect(flag).to.equal(true);
                
            });
            

        });
    });

    xit('Test 2 - verify the reposne by JSON.parse', ()=>{
        
        cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl')+'/posts'
        }).then((response)=>{
            cy.log(response.status);
            let data = JSON.parse(response.body);
            cy.log(JSON.stringify(data));

        });
    });
});