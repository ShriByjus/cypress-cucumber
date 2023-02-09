import { Given, When , And , Then } from "cypress-cucumber-preprocessor/steps";
Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
})
When('A user enter the user email id {string}', (emailId)=>{
   cy.get('#email').type(emailId);   
})
And('A user enter the passward {string}', (passward)=>{
    cy.get('#password').type(passward); 
})
And('A user click on the login button', ()=>{
    cy.get(':nth-child(3) > .btn').click();
})
When('A user will click on profile tab', ()=>{
    return cy.get('#ui-id-4').click();
 })
 Then('A user will able to see all his information', ()=>{
    cy.get('#showtitle').should('have.text','Title:')  
 })
