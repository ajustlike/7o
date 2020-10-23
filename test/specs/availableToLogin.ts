import SecurePage from '../pageobjects/secure.page'


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        SecurePage.login('dx8op1@vmani.com', '123456');
        expect($('#root > div._3A63q._10WbC')).toBeDisplayed;
       
    });
});


