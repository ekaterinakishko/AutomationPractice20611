import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';
import BasePage from '../pages/base.page';
import data from '../data/user';
const user = require ('../data/user');

describe('Create an account', () => {
    it('should login new user', () => {
        LoginPage.open();

        LoginPage.signInBtn.click();
        expect(LoginPage.header.getText()).toEqual(user.new.header);

    });
});


