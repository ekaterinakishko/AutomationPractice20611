import LoginPage from '../pages/login.page';
const user = require ('../data/user');

before(()=>{
    LoginPage.open();
    browser.maximizeWindow();
})

describe('Choose T-shirt', () => {

      it('should find T-shirt section', function() {
        LoginPage.womanTab.moveTo()
        LoginPage.tShirtsItem.click()
        LoginPage.firsItem.scrollIntoView()
        LoginPage.moreBtn.waitForDisplayed({ timeout: 3000 })
        LoginPage.moreBtn.click()

    });
});


