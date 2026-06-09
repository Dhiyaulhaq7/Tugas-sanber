class LoginPage {
  // 1. Locators (Elemen UI)
  get usernameInput() { return cy.get('#app [name="username"]') }
  get passwordInput() { return cy.get('#app [name="password"]') }
  get loginButton() { return cy.get('#app button.oxd-button') }

  // 2. Actions (Fungsi Mengisi Form)
  isiFormDanLogin(username, password) {
    if (username) this.usernameInput.type(username)
    if (password) this.passwordInput.type(password)
    this.loginButton.click()
  }

  // 3. Actions (Fungsi Setup Intercept Jaringan)
  pasangIntercept(aliasName, statusCodeValue, responseBodyOrHeaders) {
    cy.intercept('POST', '**/web/index.php/auth/validate', {
      statusCode: statusCodeValue,
      ...responseBodyOrHeaders
    }).as(aliasName)
  }

  // 4. Actions (Fungsi Validasi Jaringan)
  validasiStatusJaringan(aliasName, expectedStatus) {
    cy.wait(`@${aliasName}`).its('response.statusCode').should('eq', expectedStatus)
  }
}

export default new LoginPage();