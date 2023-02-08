describe('loging test', function(){
    it('Success Loin',()=>{
        cy.url('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-2').click();
        cy.get('#quotation_breakdowncover').select('At home').should('have.value', '3')
        cy.get('#quotation_windscreenrepair_t').click();
        cy.get('#quotation_incidents').type('5');
        cy.get('#quotation_vehicle_attributes_registration').type('KA-25-U 1234');
        cy.get('#quotation_vehicle_attributes_mileage').type('35');
        cy.get('#quotation_vehicle_attributes_value').type('65000');
        cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private Property').should('have.value', 'Private property')
        cy.get('#quotation_vehicle_attributes_policystart_1i').select('2016').should('have.value','2016')
        cy.get('#quotation_vehicle_attributes_policystart_2i').select('September').should('have.value','9')
        cy.get('#quotation_vehicle_attributes_policystart_3i').select('4').should('have.value','4')
        cy.get('input[value="Save Quotation"]').click();

        
    })
  })