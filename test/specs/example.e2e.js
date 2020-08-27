import LoginPage from '../pages/login.page';
import CheckoutPage from '../pages/checkout.page';
const user = require('../data/user');
before(() => {
  LoginPage.open();
  browser.maximizeWindow();
});

describe('ADDING AND PURCHASING ITEMS', () => {
  it('SHOULD ADD ITEMS IN THE CART', function () {
    LoginPage.login(user);
    LoginPage.womanTab.moveTo();
    LoginPage.tShirtsItem.waitForDisplayed();
    LoginPage.tShirtsItem.click();
    LoginPage.pageBottom.scrollIntoView();
    LoginPage.firstItem.moveTo();
    LoginPage.moreBtn.click();
    LoginPage.itemQty.setValue(user.items);
    LoginPage.itemSize.selectByAttribute('value', user.sizeLarge);
    LoginPage.blueColor.click();
    LoginPage.addToCartBtn.click();
    LoginPage.itemsAddedMessage.waitForDisplayed();
    expect(LoginPage.itemsAddedMessage.getText()).toEqual(user.itemsAddedToCartMsg);
  });

  it('SHOULD PLACE AN ORDER', function () {
    CheckoutPage.proceedToCheckoutBtnPOPUP.click();
    CheckoutPage.checkOutTitle.waitForDisplayed();
    CheckoutPage.checkOutPageFooter.scrollIntoView();
    CheckoutPage.proceedToCheckoutBtnFirst.click();
    CheckoutPage.checkOutPageFooter.scrollIntoView();
    CheckoutPage.proceedToCheckoutBtnSecond.click()
    CheckoutPage.termsAndCondCheckBox.click()
    CheckoutPage.proceedToCheckoutBtnFirst.click()
    CheckoutPage.checkOutPageFooter.scrollIntoView();
    CheckoutPage.wireTransferPayment.click()
    CheckoutPage.proceedToCheckoutBtnFirst.click();
    expect(CheckoutPage.orderConfirmationMsg.getText()).toEqual(user.orderConfirmationMsg)
    browser.pause(10000);
  });
});
