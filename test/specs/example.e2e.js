import LoginPage from '../pages/login.page';
const user = require ('../data/user');

before(()=>{
    LoginPage.open('/');
    browser.maximizeWindow();
})

describe('Choose T-shirt', () => {

      it('should find T-shirt section', function() {
        LoginPage.womanTab.moveTo()
        LoginPage.tShirtsItem.waitForDisplayed()
        LoginPage.tShirtsItem.click()
        LoginPage.pageBottom.scrollIntoView()
        LoginPage.firstItem.moveTo()
        LoginPage.moreBtn.click()

    });
});


