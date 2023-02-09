describe('loging test', function(){
    it('edit profile',()=>{
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        return cy.get('#ui-id-5').click(); 
         cy.get('#user_title').select('Miss').should('have.value', 'Miss')
         cy.get('#user_firstname').type('rahul')
         cy.get('#user_surname').type('mirashi')
         cy.get('#user_phone').type('9999999999')
         cy.get('#user_dateofbirth_1i').select('1999').should('have.value', '1999')
         cy.get('#user_dateofbirth_2i').select('April').should('have.value', '4')
         cy.get('#user_dateofbirth_3i').select('6').should('have.value', '6')
         cy.get('#licencetype_f').click();
         cy.get('#user_licenceperiod').select('5').should('have.value', '5')
         cy.get('#user_occupation_id').select('Engineer').should('have.value', '12')
         cy.get('#user_address_attributes_street').type('IBC Park');
         cy.get('#user_address_attributes_city').type('banglore');
         cy.get('#user_address_attributes_county').type('banglore');
         cy.get('#user_address_attributes_postcode').type('581329');
         cy.get('#user_user_detail_attributes_email').type('seenumirashi1992@gmail.com');
         cy.get('#user_user_detail_attributes_password').type('banglore');
         cy.get('#user_user_detail_attributes_password_confirmation').type('banglore');
         cy.get('[name="submit"]').click();
         cy.url().should('include', 'header.php');

    })
  })
