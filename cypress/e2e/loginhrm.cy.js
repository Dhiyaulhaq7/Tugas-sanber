import LoginPage from '../support/loginpage'
import dataLogin from '../fixtures/logindata.json'

describe('Quiz 3: Intercepting Login OrangeHRM dengan Format POM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('1.1 Login dengan kondisi password dan username benar (Sukses)', () => {
    LoginPage.pasangIntercept('loginSukses', 200, {
      body: { status: 'success', redirect: '/web/index.php/dashboard/index' }
    })
    
    LoginPage.isiFormDanLogin(dataLogin.skenario11.user, dataLogin.skenario11.pass)
    LoginPage.validasiStatusJaringan('loginSukses', 200)
  })

  it('1.2 Login dengan kondisi password benar dan username salah', () => {
    LoginPage.pasangIntercept('usernameSalah', 302, {
      headers: { 'location': '/web/index.php/auth/login' }
    })

    LoginPage.isiFormDanLogin(dataLogin.skenario12.user, dataLogin.skenario12.pass)
    LoginPage.validasiStatusJaringan('usernameSalah', 302)
  })

  it('1.3 Login dengan kondisi password salah dan username benar', () => {
    LoginPage.pasangIntercept('passwordSalah', 401, {
      body: { error: 'Invalid credentials' }
    })

    LoginPage.isiFormDanLogin(dataLogin.skenario13.user, dataLogin.skenario13.pass)
    LoginPage.validasiStatusJaringan('passwordSalah', 401)
  })

  it('1.4 Login dengan kondisi password benar tanpa mengisi username', () => {
    LoginPage.pasangIntercept('usernameKosong', 400, {
      body: { message: 'Username is required' }
    })

    LoginPage.isiFormDanLogin(dataLogin.skenario14.user, dataLogin.skenario14.pass)
    LoginPage.validasiStatusJaringan('usernameKosong', 400)
  })

  it('1.5 Login dengan kondisi username benar tanpa mengisi password', () => {
    LoginPage.pasangIntercept('passwordKosong', 422, {
      body: { message: 'Password cannot be empty' }
    })

    LoginPage.isiFormDanLogin(dataLogin.skenario15.user, dataLogin.skenario15.pass)
    LoginPage.validasiStatusJaringan('passwordKosong', 422)
  })

})