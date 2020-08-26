import LoginPage from '../pages/login.page';
const user = require ('../data/user');

before(()=>{
    LoginPage.open('/');
    browser.maximizeWindow();
})

describe('Create an account and login with new user credentials', () => {
    // it('should login new user', () => {
    //     LoginPage.open();
    //     LoginPage.signInBtn.click();
    //     expect(LoginPage.header.getText()).toEqual(user.header);
    // });

    // it('should fill email field', function() {
    //     LoginPage.createAnAccount.setValue(user.email);
    //     LoginPage.createAnAccountBtn.click();
    //     expect(LoginPage.header.getText()).toEqual(user.header);
    // });

    it('should register new user', function() {
        LoginPage.register(user);
        expect(LoginPage.accountName.getText()).toEqual(user.firstName +" "+user.lastName);
    });


});


