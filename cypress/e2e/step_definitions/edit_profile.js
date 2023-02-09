import { Given, When , And , Then } from "cypress-cucumber-preprocessor/steps";
Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
})
When('user will select edit profile tab', ()=>{
     cy.get('#ui-id-5').click(); 
})
And('user will select Title', ()=>{
    cy.get('#user_title').select('Miss').should('have.value', 'Mrs')
})
And('user will select his firstName {string}', (firstName)=>{
    cy.get('#user_firstname').type(firstName)
})
And('user will selecth his surname {string}', (surname)=>{
    cy.get('#user_surname').type(surname)
})
And('user will select phone number {string}', (number)=>{
    cy.get('#user_phone').type(number)
})
And('user will select his DOB year', ()=>{
    cy.get('#user_dateofbirth_1i').select('1999').should('have.value', '1999')
})
And('user will select his DOB month', ()=>{
    cy.get('#user_dateofbirth_2i').select('April').should('have.value', '4')
})
And('user will select his DOB day', ()=>{
    cy.get('#user_dateofbirth_3i').select('6').should('have.value', '6')
})
And('user will select full / provisional', ()=>{
    cy.get('#licencetype_f').click();
})
And('user will select licence period', ()=>{
    cy.get('#user_licenceperiod').select('5').should('have.value', '5')
})
And('user will select his occupation', ()=>{
    cy.get('#user_occupation_id').select('Engineer').should('have.value', '12')
})
And('user will select his address {string}', (address)=>{
    cy.get('#user_address_attributes_street').type(address);
})
And('user will select his city {string}', (city)=>{
    cy.get('#user_address_attributes_city').type(city);
})
And('user will select his country {string}', (country)=>{
    cy.get('#user_address_attributes_county').type(country);
})
And('user will select his postalCode {string}', (postalCode)=>{
    cy.get('#user_address_attributes_postcode').type(postalCode);
})
And('user will select his email {string}', (email)=>{
    cy.get('#user_user_detail_attributes_email').type(email);
})
And('user will select his passward {string}', (passward)=>{
    cy.get('#user_user_detail_attributes_password').type(passward);
})
And('user will select his confirmPassward {string}', (confirmPassward)=>{
    cy.get('#user_user_detail_attributes_password_confirmation').type(confirmPassward);
})
Then('user will click on create button', ()=>{
    cy.get('[name="submit"]').click();
})
