import LoginPage from '../pages/login.page';
const user = require ('../data/user');

before(()=>{
  LoginPage.open('/');
  browser.maximizeWindow();
})

describe('Create an account and login with new user credentials', () => {

  it('should register new user', function() {
    LoginPage.register(user);
    expect(LoginPage.accountNameHeaderTab.getText()).toEqual(user.firstName + " " + user.lastName);
  })
})

