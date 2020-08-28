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

  get dressesBtn(){
    return $$('.sf-with-ul')[3]
  }

  get summerDresses(){
    return $("//li[@class='sfHover']//a[contains(text(),'Summer Dresses')]")
  }

  get items (){
  return $$('.product-container')
}

get discount (){
    return $$('.price-percent-reduction')
}

}
export default new CheckoutPage();
