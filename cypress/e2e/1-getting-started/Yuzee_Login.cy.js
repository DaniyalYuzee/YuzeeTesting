Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Visit the site, click on the Login link, and click on the Sign in button', () => {
      it('should visit the site, click on the Login link, and click on the Sign in button', () => {
  
        
        
        cy.visit('https://dev.yuzee.click');
  
      cy.contains('Sign in').click();
  //comment add
      cy.get('.row > :nth-child(1) > .form-control').clear()
      cy.get('.row > :nth-child(1) > .form-control').type('johnmccormack@yopmail.com')
  
      cy.get('.pass-fild > .form-control').clear()
      cy.get('.pass-fild > .form-control').type('Admin12345!')

  //asd
      cy.get('form.ng-dirty > .text-center > .btn').click()



      
      })
    })