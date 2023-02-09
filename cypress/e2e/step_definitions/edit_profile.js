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
And('user will select his first name', ()=>{
    cy.get('#user_firstname').type('rahul')
})
And('user will selecth his surname', ()=>{
    cy.get('#user_surname').type('mirashi')
})
And('user will select phone number', ()=>{
    cy.get('#user_phone').type('9999999999')
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
And('user will select his address', ()=>{
    cy.get('#user_address_attributes_street').type('IBC Park');
})
And('user will select his city', ()=>{
    cy.get('#user_address_attributes_city').type('banglore');
})
And('user will select his country', ()=>{
    cy.get('#user_address_attributes_county').type('banglore');
})
And('user will select his postal code', ()=>{
    cy.get('#user_address_attributes_postcode').type('581329');
})
And('user will select his email', ()=>{
    cy.get('#user_user_detail_attributes_email').type('seenumirashi1992@gmail.com');
})
And('user will select his passward', ()=>{
    cy.get('#user_user_detail_attributes_password').type('banglore');
})
And('user will select his confirm passward', ()=>{
    cy.get('#user_user_detail_attributes_password_confirmation').type('banglore');
})
Then('user will click on create button', ()=>{
    cy.get('[name="submit"]').click();
})
