describe('правильный логин и пароль', function () {
  it('Проверка, что при правильном вводе логина и пароля выводит сообщение "Авторизация прошла успешно"', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');

   })
})


describe('Восстановление пароля', function () {
  it('Проверка, что при восстановлении пароля выводит сообщение "Успешно отправили пароль на e-mail"', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('german@dolnikov.ru');
       cy.get('#restoreEmailButton').click();
       cy.get('#message').contains('Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');


   })
})

describe('Не правильный пароль', function () {
  it('Проверка, что при не правильном пароле выводит сообщение "Такого логина или пароля нет"', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('Пароль');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');


   })
})

describe('Не правильный пароль', function () {
  it('Проверка, что при не правильном пароле выводит сообщение "Такого логина или пароля нет"', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('gman@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');


   })
})

describe('Валидация', function () {
  it('Проверка, что при не валидном логине без @ выводит сообщение "Нужно исправить проблему валидации"', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('gmandolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');


   })
})

describe('Строчные буквы', function () {
  it('Проверка, что при строчных букыах логине  выводит сообщение "Авторизация прошла успешно"', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#message').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');


   })
})