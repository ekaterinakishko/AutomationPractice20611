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

    xit('should register new user', function() {
        LoginPage.register(user);
        expect(LoginPage.accountNameHeaderTab.getText()).toEqual(user.firstName +" "+user.lastName);

    });
    xit('should login as a new user', function() {
        LoginPage.open('/index.php?controller=authentication&back=my-account')
        //LoginPage.signOutBtn.click()
        LoginPage.login(user)
        expect(LoginPage.accountNameHeaderTab.getText()).toEqual(user.firstName +" "+user.lastName);
    });

    it('should find T-shirt section', function() {
        LoginPage.womanTab.moveTo()
        browser.pause(3000)
        LoginPage.tShirtsItem.click()
        browser.elementHover($(".product-container"))
        $(".product-container").moveTo()
        browser.pause(5000)
        $(".button lnk_view btn btn-default").click()
        browser.pause(5000)



    });


});


