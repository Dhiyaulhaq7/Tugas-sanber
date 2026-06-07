describe('template spec', () => {
  it('Login benar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('admin');
    cy.get('#app [name="password"]').type('admin123');
    cy.get('#app button.oxd-button').click();
  })

    it('Login kondisi username salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('admin1');
    cy.get('#app [name="password"]').type('admin123');
    cy.get('#app button.oxd-button').click();
    cy.get('#app p.oxd-alert-content-text').click();

  })
  

 it('Login dengan kondisi password salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('admin');
    cy.get('#app [name="password"]').type('admin1234');
    cy.get('#app button.oxd-button').click();
    cy.get('#app p.oxd-alert-content-text').click();

  })

   it('login tanpa mengisi username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="password"]').click();
    cy.get('#app [name="password"]').type('admin123');
    cy.get('#app button.oxd-button').click();
    cy.get('#app span.oxd-text').click();
  })

   it('Login tanpa mengisi password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('admin');
    cy.get('#app button.oxd-button').click();
    cy.get('#app span.oxd-text').click();
  })

   it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app button.oxd-button').click();
    cy.get('#app div:nth-child(2) > div.oxd-input-group > span.oxd-text').click();
cy.get('#app div:nth-child(3) > div.oxd-input-group > span.oxd-text').click();
  })


})

