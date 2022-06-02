
let employee = Math.floor(200 + Math.random() * 500)
let email = "test."+employee+"@gmail.com"
let login = "test"+employee
let url = 'https://demo.casino/'
let password = 'Prueba123'

describe('EJERCICIO DE AUTOMATIZACIÓN E2E', () => {

  it('Visitar pagina', () => {
      //visit url
      cy.visit(url)
      //validate page title
      cy.title().should('eq', 'Demo Casino')
      cy.get('.modal__buttons > .button--t1').click()
      //validate main elements on home page
      cy.get('.logo-header > a > img').should('be.visible');
      cy.get('[data-test="nav-reg-head"] > span').should('be.visible');
      cy.get('[data-test="nav-reg-head"] > span').should('have.text', 'Sign up');
      cy.wait(3000)

  })
  it('Registrar nuevo usuario', () => {

      cy.get('[data-test="nav-reg-head"]').click()

      //validate being on the registration page
      cy.url().should("include", "/user/registration") 
      cy.get('.modal__buttons > .button--t1').click()
      cy.get('.form__input > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > .selected').click()
      cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_email').clear().type(email);
      cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password').clear().type(password);
      cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation').clear().type(password);
      cy.get(':nth-child(3) > .input__wrapper > .selectric-wrapper > .selectric > .selectric__button').click();
      cy.get(':nth-child(3) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click();
      cy.get('.input__wrapper > label').click();
      cy.get('.input__wrapper > label').should('be.visible');
      cy.get('.input__wrapper > label').should('have.text', 'I unconditionally agree with Terms & Conditions, Data Policy, Cookie Policy and that I am older than 21 years old');
      cy.get(':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric > .selectric__button').click();
      cy.get(':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="3"]').click();
      cy.get('[data-test="input-secret_answer"]').clear().type('silvestre talon');
      cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_username').clear().type(login);
      cy.get('.form__section--title').click();
      cy.get('.form__section--title').should('be.visible');
      cy.get('.form__section--title').should('have.text', 'Redeem Bonus');
      cy.get('.special-radio__active > .special-radio__label').should('be.visible');
      cy.get(':nth-child(2) > .special-radio__label').click();
      cy.get('[data-test="control-submit"]').click();

      //validate correct record
      cy.get('.notification__title').should('be.visible')
      cy.get('.notification__description').should('be.visible')
      cy.get('.notification__buttons > .button--t1').click()
      cy.get('.logo-header > a').click()
      cy.wait(3000)

      //validate segments on the page
      cy.get('.currency--real > .form__input').should('be.visible')
      cy.get('.currency--bonus > .form__input').should('be.visible')
      cy.get('.swiper-slide-visible > .slider-main__img > picture > .slider-main-content').should('be.visible')
      cy.get('.section--games-types').should('be.visible')
      cy.get(':nth-child(5) > .container').should('be.visible')
  })
  it('Validar login', () => {
    cy.visit(url);
    cy.get('.button--t1 > span').click();
    cy.get('div.button > span').click();
    cy.get('[data-test="nav-login-head"] > span').click();
    cy.url().should("include", "/user/login") 
    cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_email').clear().type(email);
    cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password').clear().type(password);
    cy.get('[data-test="control-submit"] > span').click();

    //validate segments on the page
    cy.get('.currency--real > .form__input').should('be.visible')
    cy.get('.currency--bonus > .form__input').should('be.visible')
    cy.get('.swiper-slide-visible > .slider-main__img > picture > .slider-main-content').should('be.visible')
    cy.get('.section--games-types').should('be.visible')
    cy.get(':nth-child(5) > .container').should('be.visible')

})

})


