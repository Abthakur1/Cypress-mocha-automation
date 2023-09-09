// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// require("cypress");
require('cypress-xpath');
// before('Pre-requsites and Read test data from fixture file', ()=>{
//     cy.clearAllCookies()
//     cy.fixture('testData').as('readData');
//     cy.log('Before start executing any test')
// });
// beforeEach('Open Browser and launch url', ()=>{
//     let envrn = Cypress.env('environment');
//     cy.visit(Cypress.env(envrn));
// })

// Alternatively you can use CommonJS syntax:
// require('./commands')