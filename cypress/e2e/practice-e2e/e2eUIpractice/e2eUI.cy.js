import HomePg from "../pageObjects/e2eUIpracticePages/homePage";
import RegisterPage from "../pageObjects/e2eUIpracticePages/registerPg";
import Buttons from "../pageObjects/e2eUIpracticePages/buttonsPage";

const homePgObj = new HomePg();
const registerPgObj = new RegisterPage();
const buttonsObj = new Buttons();

describe('Test suite with UI Actions', ()=>{
    xit('Test Registration functionality', ()=>{
        cy.visit('https://qa-practice.netlify.app/');
        // Cypress.config('pageLoadTimeout', 10000); // overriding the configuration
        homePgObj.formOption();
        homePgObj.chooseRegistration();
        registerPgObj.userRegistration('Abhishek', 'Thakur', 9123456780,'India', 'abc@gmail.com', 'Pass@1234');
        registerPgObj.verifyRegistration ();
    });

    xit('Test Button and actions on buttons', ()=>{
        cy.visit('https://qa-practice.netlify.app/');
        homePgObj.clickOnLinkOptions('buttons');
        homePgObj.clickOnLinkOptions('checkboxes');
        buttonsObj.chekcTheCheckBox();
        buttonsObj.radioButtonOptions();
        cy.get('#radio-button4').should('be.disabled');

    });

    xit('Test windows', ()=>{
        cy.visit('https://qa-practice.netlify.app/');
        cy.xpath("(//a[@id='buttons'])[2]").click();
        
        //handle new tab

        cy.get('#browser-tab').click();
        cy.xpath("//a[text()='Press me - New Tab']").invoke('removeAttr', 'target');
        cy.xpath("//a[text()='Press me - New Tab']").click();
        cy.url().should('include','web-table');

        //handle new browser tab
        cy.xpath("(//a[@id='buttons'])[2]").click();
        // cy.get('#browser-tab').click();
        cy.get('#browser-window').click();
        cy.get('button#newWindowBtn').click();
    })

    xit('Test alerts', ()=>{
        cy.visit('https://qa-practice.netlify.app/');
        homePgObj.clickOnLinkOptions('alerts');
        cy.get('#alert-btn').click();
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('Hello! I am an alert box!!');
            return true;
        })
        cy.get('#confirm-btn').click();
        cy.on('window:alert', (t)=>{
            return true;
        })

    });

    it('Test button actions', ()=>{
        cy.visit('https://qa-practice.netlify.app/');

        // scrolling
        cy.get('#actions').click();
        cy.get('#scrolling').should('be.visible').click();
        cy.scrollTo(0,18000);
        cy.contains('THE END');

        //mouse hover
        cy.get('#actions').click();
        cy.get('#mouse-hover').click();
        cy.get('#button-hover-over').invoke('mouseover')
    });

});