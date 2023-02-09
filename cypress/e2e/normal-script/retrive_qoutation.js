describe('loging', function(){
    it('retrive qoutation',()=>{
        cy.visit('https://demo.guru99.com/insurance/v1/header.php')
        cy.get('#ui-id-3').click();
        cy.get('input[placeholder="identification number"]').type('21556');
        cy.get('#getquote').click();
        
    })
  })