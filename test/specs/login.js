import LoginPage from '../pages/login.page';
const user = require ('../data/user');

before(()=>{
  LoginPage.open('/index.php?controller=authentication&back=my-account');
  browser.maximizeWindow();
})

describe('USER LOGIN', () => {

  it('should login as a new user', function() {
    LoginPage.login(user)
    expect(LoginPage.accountNameHeaderTab.getText()).toEqual(user.firstName + " " + user.lastName);
  });
})
