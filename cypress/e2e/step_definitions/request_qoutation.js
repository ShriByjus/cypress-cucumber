import { Given, When , And , Then } from "cypress-cucumber-preprocessor/steps";
Given('A user opens the login page', ()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
})
When('A user enter the user emailId {string}', (emailId)=>{
   cy.get('#email').type(emailId);   
})
And('A user enter the passward {string}', (passward)=>{
    cy.get('#password').type(passward); 
})
And('A user click on the login button', ()=>{
    cy.get(':nth-child(3) > .btn').click();
})
When(' A user will click on request qoutation tab', ()=>{
    cy.get('#ui-id-2').click();
 })
 And('A user will select Breakdowncover', ()=>{
    cy.get('#quotation_breakdowncover').select('At home').should('have.value', '3')
})
And('A user will select Windscreenrepair', ()=>{
    cy.get('#quotation_windscreenrepair_t').click();
})
And('A user will select incidents {string}', (incidents)=>{
    cy.get('#quotation_incidents').type(incidents);
})
And('A user will will select RegNo {string}', (RegNo)=>{
    cy.get('#quotation_vehicle_attributes_registration').type(RegNo);
})
And('A user will select annula milage {string}', (annulaMilage)=>{
    cy.get('#quotation_vehicle_attributes_mileage').type(annulaMilage);
})
And('A user will select EstimatedValue {string}', (EstimatedValue)=>{
    cy.get('#quotation_vehicle_attributes_value').type(EstimatedValue);
})
And('A user will select parking location', ()=>{
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private Property').should('have.value', 'Private property')
})
And('A user will select policy year', ()=>{
    cy.get('#quotation_vehicle_attributes_policystart_1i').select('2016').should('have.value','2016')
})
And(' A user will select policy month', ()=>{
    cy.get('#quotation_vehicle_attributes_policystart_2i').select('September').should('have.value','9')
})
And('A user will select policy day', ()=>{
    cy.get('#quotation_vehicle_attributes_policystart_3i').select('4').should('have.value','4')
})
And('A user will click on save qoutation button', ()=>{
    cy.get('input[value="Save Quotation"]').click();
})
Then('A user identification number should generate', ()=>{
    cy.get(':nth-child(3) > .btn').click();
})
