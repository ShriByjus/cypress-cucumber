describe('loging test', function(){
    it('Success Loin',()=>{
        cy.url('https://demo.guru99.com/insurance/v1/header.php')
         cy.get('a.btn'),click();
         cy.get('#user_title').select('Mrs').should('have.value', 'Mrs')
         cy.get('#user_firstname').type('shrinath')
         cy.get('#user_surname').type('mirashi')
         cy.get('#user_phone').type('9898989898')
         cy.get('#user_dateofbirth_1i').select('1992').should('have.value', '1992')
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