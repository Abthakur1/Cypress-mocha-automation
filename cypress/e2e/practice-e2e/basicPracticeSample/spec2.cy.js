describe('test suite', ()=>{
    it('Test-1', ()=>{
        cy.visit('https://ui.cogmento.com//');
        cy.get('input[name="email"]').type('absk.cts@gmail.com');
        cy.get('input[name="password"]').type('Test@2023');
        cy.xpath("//div[text()='Login']").click();
        cy.url().should('include','ui.cogmento');
        cy.get('div#main-nav').scrollIntoView().click();
        cy.xpath("//span[text()='Companies']//parent::a").click({force:true});
        
        //print all the companies list
        let arrayOfElementText = [];
        cy.xpath('//table/tbody/tr/td[2]/a').each(($el,index,$list)=>{
            let text = $el.text()
              arrayOfElementText.push(text);          
        
        }).then(()=>{
            cy.log(arrayOfElementText);
            arrayOfElementText.forEach(val=>{
                // cy.log(val);
                cy.wrap(arrayOfElementText).as('myArray');
            })

        })

        cy.get('@myArray').then(myArray=>{
            cy.log(myArray);
            cy.log(myArray.at(1));

        })
    })
})