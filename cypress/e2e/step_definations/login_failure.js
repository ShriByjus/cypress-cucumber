import { Given, When , And , Then } from "cypress-cucumber-preprocessor/steps";
Given('A user opens the login page', ()=>{
    cy.visit('/')
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
Then('A user will be logged in', ()=>{
    cy.get('form[id="login-form"] div span').sholud('have.text','Enter your Email address and password correct')
})