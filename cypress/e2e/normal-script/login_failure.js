describe('loging test', function(){
  it('Success Loin',()=>{
      cy.visit('https://demo.guru99.com/insurance/v1/index.php')
      cy.get('#email').type('seenumirashi1992@gmail.com');
      cy.get('#password').type('test12345');
      cy.get(':nth-child(3) > .btn').click();
  })
})