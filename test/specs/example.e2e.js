import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';
import BasePage from '../pages/base.page';
import data from '../data/user';
const user = require ('../data/user');

describe('Create an account', () => {
    it('should login new user', () => {
        LoginPage.open();

        LoginPage.signInBtn.click();
        expect(LoginPage.header.getText()).toEqual(user.header);
    });

    it('should fill email field', function() {
        LoginPage.createAnAccount.setValue(user.email);
        LoginPage.createAnAccountBtn.click();
        expect(LoginPage.header.getText()).toEqual(user.header);
    });

    it('should register new user', function() {
        LoginPage.register(user);
browser.pause(5000);
//expect(LoginPage.)



    });


});


