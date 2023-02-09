import { Given, When , And , Then } from "cypress-cucumber-preprocessor/steps";
Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
})
When('A user enter the user email id {string}', (email_id)=>{
   cy.get('#email').type(email_id);   
})
And('A user enter the passward {string}', (passward)=>{
    cy.get('#password').type(passward); 
})
And('A user click on the login button', ()=>{
    cy.get(':nth-child(3) > .btn').click();
})
When('A user will click on retrive qoutation tab', ()=>{
    cy.get('#ui-id-3').click();
})
And(' A user will enter identification number', ()=>{
    cy.get('input[placeholder="identification number"]').type('21556');
})
And('A user will click on retrive button', ()=>{
    cy.get('#getquote').click();
})
Then('A user details should generate',()=>{
    cy.url().should('inclue','retrieve_quotation');
})