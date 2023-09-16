
describe('Покупка фото в покемонах', function () {
  it('Проверка, что при правильном выводит сообщение "Покупка прошла успешно"', function () {
       cy.visit('https://pokemonbattle.me/login');
       cy.get(':nth-child(1) > .auth__input').type('a1ratabdullin@yandex.ru');
       cy.get('#password').type('654321A');
       cy.get('.auth__button').click();
       cy.get('.header__btns > [href="/shop"]').click();
       cy.get(':nth-child(2) > .shop__button').click();
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
       cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Perslik lol');
       cy.get('.pay-btn').click();
       cy.get('#cardnumber').type('56456');
       cy.get('.payment__submit-button').click();
       cy.get('.payment__padding').contains('Покупка прошла успешно');


   })
})

