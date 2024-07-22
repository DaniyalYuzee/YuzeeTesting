Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Visit the site, click on the Login link, and click on the Sign in button', () => {
      it('should visit the site, click on the Login link, and click on the Sign in button', () => {
  
        const randomName = generateRandomName();
        
        cy.visit('https://dev.yuzee.click');
  
      cy.contains('Sign in').click();
  
      cy.get('.row > :nth-child(1) > .form-control').clear()
      cy.get('.row > :nth-child(1) > .form-control').type('johnmccormack@yopmail.com')
  
      cy.get('.pass-fild > .form-control').clear()
      cy.get('.pass-fild > .form-control').type('Admin12345!')
  
      cy.get('form.ng-dirty > .text-center > .btn').click()

  cy.wait(8000)
  
      cy.get('.d-none-from-me > .nav-link > .menu-text-none').click()
  
      cy.get('.d-none-from-me > .posi-relative > .wrapper > .menu-bar > :nth-child(8) > a').click()
  
      
  
      cy.get(':nth-child(4) > .post-header > .post-title > .fs-11').click()
      //cy.get(':nth-child(4) > .post-header > .post-title').click()
  
      
  
  
        //cy.get('[data-testid="royal_login_button"]').click()
  
        
        
  
      //   //cy.contains('Login').click()
      //   cy.get('form.ng-untouched > .text-center > .btn').click().wait(8000)
  
      //   //cy.get('.modal-header > .close').click() 
  
        cy.contains('Applications').should('be.visible').click() 
       
        cy.wait(5000);
        cy.contains('Applications').should('be.visible').click() 
        cy.wait(5000);
        cy.contains('Applications').should('be.visible').click() 
        
        cy.contains('Application Procedures').click() 
        cy.get('.text-center > .btn').click()
        cy.get('.text-center > .btn').click()
        cy.get('.col-md-9 > :nth-child(1) > .row > :nth-child(1) > :nth-child(1) > .type-card').click() 
        cy.get('app-create-proc-step1 > :nth-child(1) > .row > .pr-md-0 > :nth-child(1) > .type-card').click()   
        
        
        cy.get('#name').type(randomName)
        cy.get('.nex-bt-section > .btn').click().should('be.visible')
    
    
        //cy.get('.fs-16').click().should('be.visible')
  
        cy.get('.text-center > .btn').click()
        cy.get('.ng-untouched > .nex-bt-section > .btn').click().wait(2000)
        
        cy.get(':nth-child(1) > .multiselect-control > .ng-select > .ng-select-container > .ng-value-container > .ng-placeholder').type('adnan').wait(1000)
        cy.get('.ng-dropdown-panel-items > :nth-child(2)').type('{enter}')
    
        cy.get(':nth-child(2) > .multiselect-control > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('civil').wait(1000)
        cy.get('.ng-dropdown-panel-items > :nth-child(2)').type('{enter}')
    
        cy.get('app-create-proc-step3 > .block-sec > form.ng-touched > .nex-bt-section > .btn').click().wait(2000)
            
        cy.get('.block-sec > .nex-bt-section > .btn > .ng-star-inserted').wait(3000).click().wait(3000)
    
        cy.get('app-create-proc-step8 > .block-sec > .nex-bt-section > .btn').click().wait(3000)
    
        cy.get('.col-8 > .nex-bt-section > .btn').click().wait(3000)
    
        cy.get('.nex-bt-section > .btn').click().wait(1000)
    
      cy.get('#app_procedure1 > .ng-select-container > .ng-value-container > .ng-input').type('{downarrow}').type('{enter}').wait(2000)
        
       cy.get('.ng-dropdown-panel-items > :nth-child(2)').type('{downarrow}').type('{enter}')
    
       cy.get('.modal-footer > .btn-blue').click()
    
    
    
    
    
      //cy.get('ng-dropdown-panel-items scroll-host').find('a4edea48153d-1').contains('Change procedure').click()
    
    
    
        // cy.get('#ae556b0d8af4').select('#a1cfbde7a931-0 > .ng-option-label')
        // cy.get('#ae556b0d8af4').select('Adnan faculty')
        // cy.get(':nth-child(1) > .multiselect-control > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click()
      
      })
    })
    
    function generateRandomName() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let randomName = '';
      for (let i = 0; i < 8; i++) {
        randomName += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return randomName;
    }