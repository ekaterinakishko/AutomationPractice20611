import BasePage from './base.page';

class CheckoutPage extends BasePage {

  get proceedToCheckoutBtnPOPUP() {
    return $('.button-medium');
  }
  get proceedToCheckoutBtnFirst() {
    return $$("i.right")[2];
  }
  get proceedToCheckoutBtnSecond() {
    return $$("i.right")[6];
  }
  get checkOutPageFooter(){
    return $(".toggle-footer")
  }
  get checkOutTitle(){
    return  $("#cart_title")  // checkout summary title
  }
  get termsAndCondCheckBox(){
    return $("#uniform-cgv")
  }
  get wireTransferPayment(){
    return $(".bankwire")
  }
  get orderConfirmationMsg(){
    return $(".cheque-indent")
  }
}
export default new CheckoutPage();
