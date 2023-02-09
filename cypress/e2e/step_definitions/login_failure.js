import {
    Given,
    When,
    Then,
  } from "cypress-cucumber-preprocessor/steps";

Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})
When('A user enter the user email id', ()=>{
   cy.get('#email').type('seenumirashi1992@gmail.com');   
})
And('A user enter the passward', ()=>{
    cy.get('#password').type('bangalore'); 
})
And('A user click on the login button', ()=>{
    cy.get(':nth-child(3) > .btn').click();
})
Then('A user will be logged in', ()=>{
    cy.get('form[id="login-form"] div span').sholud('have.text','Enter your Email address and password correct')
})